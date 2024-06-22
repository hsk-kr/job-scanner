import fs from 'node:fs';
import process from 'node:process';
import path from 'node:path';

const versionCategory = process.argv[2];
const versionDirection = process.argv[3];
const currentDirname = import.meta.url.substring(
  'file://'.length,
  import.meta.url.lastIndexOf('/')
);
const packageFilePath = path.join(currentDirname, '..', '..', 'package.json');
const envFilePath = path.join(currentDirname, '..', '..', 'src', '.env');
const manifestFilePath = path.join(
  currentDirname,
  '..',
  '..',
  'public',
  'manifest.json'
);

const validParams = (versionCategory, versionDirection) => {
  const isValidCategory =
    versionCategory === 'major' ||
    versionCategory === 'minor' ||
    versionCategory === 'patch';
  const isValidDirection =
    versionDirection === 'up' || versionDirection === 'down';

  return isValidCategory && isValidDirection;
};

if (!validParams(versionCategory, versionDirection)) {
  console.log('Usage - node version-manage.mjs major|minor|patch up|down');
  console.log('Example - node version-manage.mjs patch up');
  process.exit(1);
}

const readFile = (path) => {
  return fs.readFileSync(path, 'utf8');
};

const writeFile = (path, content) => {
  fs.writeFileSync(path, content);
};

const getVersionFromPackage = () => {
  const packageContentJson = JSON.parse(readFile(packageFilePath));

  return packageContentJson.version;
};

const updateVersion = (version, versionCategory, versionDirection) => {
  const splitVersion = version.split('.').map((v) => Number(v));
  let index = 0;

  switch (versionCategory) {
    case 'major':
      index = 0;
      break;
    case 'minor':
      index = 1;
      break;
    default:
      index = 2;
      break;
  }

  splitVersion[index] =
    versionDirection === 'up'
      ? splitVersion[index] + 1
      : splitVersion[index] - 1;

  const updatedVersion = splitVersion.join('.');

  const packageFileContent = JSON.parse(readFile(packageFilePath));
  packageFileContent.version = updatedVersion;
  writeFile(packageFilePath, JSON.stringify(packageFileContent, null, 2));

  let envFileContent = readFile(envFilePath);
  envFileContent = envFileContent
    .split('\n')
    .map((line) => {
      const splitLine = line.split('=');
      if (splitLine[0] === 'VITE_VERSION') {
        return `VITE_VERSION=${updatedVersion}`;
      }

      return line;
    })
    .join('\n');
  writeFile(envFilePath, envFileContent);

  const manifestFileContent = JSON.parse(readFile(manifestFilePath));
  manifestFileContent.version = updatedVersion;
  writeFile(manifestFilePath, JSON.stringify(manifestFileContent, null, 2));

  return updatedVersion;
};

const version = getVersionFromPackage();
const updatedVersion = updateVersion(
  version,
  versionCategory,
  versionDirection
);

console.log(`version has been updated from ${version} to ${updatedVersion}.`);
