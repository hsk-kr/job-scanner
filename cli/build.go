package main

import (
	"fmt"
	"os"
	"os/exec"
)

func deleteBuildFolder() error {
	path := "./dist"

	if !ExistFile(path) {
		path = "../dist"
	}

	if !ExistFile(path) {
		return nil
	}

	err := os.RemoveAll(path)

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

	buildFolderPath := "../chromeBuild"
	distPath := "../dist"
	if ExistFile("./package.json") {
		buildFolderPath = "./chromeBuild"
		distPath = "./dist"
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
