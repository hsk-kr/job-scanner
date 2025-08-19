package main

import (
	"fmt"
	"os"
	"os/exec"
	"path/filepath"
	"testing"
)

func deleteBuildFolder() error {
	rootPath, err := GetRootPath()
	if err != nil {
		return err
	}

	buildFolderName := "dist"

	if testing.Testing() {
		buildFolderName += "_test"
	}

	path := filepath.Join(rootPath, buildFolderName)

	if !ExistFile(path) {
		return nil
	}

	err = os.RemoveAll(path)

	if err != nil {
		return err
	}

	return nil
}

func build() error {
	cmd := exec.Command("pnpm", "run", "build")
	cmd.Stdout = os.Stdout
	cmd.Stderr = os.Stderr

	err := cmd.Run()
	return err
}

func GenerateBuildZipFile(version string) error {
	err := deleteBuildFolder()
	if err != nil {
		return err
	}

	err = build()
	if err != nil {
		return err
	}

	rootPath, err := GetRootPath()
	buildFolderPath := filepath.Join(rootPath, "chromeBuild")
	distPath := filepath.Join(rootPath, "dist")
	if testing.Testing() {
		buildFolderPath += "_test"
	}

	if !ExistFile(buildFolderPath) {
		os.Mkdir(buildFolderPath, 0755)
	}

	zipPath := fmt.Sprintf("%s/%s-%s.zip", buildFolderPath, "chromeBuild", version)
	err = ZipFolder(zipPath, distPath)
	if err != nil {
		return err
	}

	return nil
}
