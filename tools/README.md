# Tools

Tools that aid in testing and development.

## linkedin-test-html-generator

The process entailed updating the joblist.html file, utilized for testing the functionality of our parsing logics.

### How To Use

1\. Execute the script.

```
pnpm run generate:html
```

If there is a chrome error, try `pnpm run setup:puppeteer`.

2\. Sign in Linkedin on the chrome test browser

This process can't be automated for security issues.

3\. Type "yes" in the command line

4\. Update Test and File.

It will generate `joblist.html` and `jobinfo.json` under the `tools/html` directory.

Replace the joblist.html file with the `utils/linkedin/__test__/html/joblist.html` file.

Update the job title, description, addtional info in `dom.test.ts` file according to jobinfo.json.

5\. Test

```
pnpm run test
```

### Reflect on the html and the test files

```
node linkedin-test-html-generator.mjs --update
```

or you can run this command under the root directory

```
pnpm run test:update
```

A part of the test code in `dom.test.ts` will be updated.
You should test and check it by yourselves and get rid of unncessary space.

## version-manage.mjs

### How To Use

```
node version-manage.mjs major|minor|patch up|down
```

If you execute the bloe command, it will increase the patch version.

For example, if the current version is `0.0.1`, the version will be `0.0.2`.

```
node version-manage.mjs patch up
```
