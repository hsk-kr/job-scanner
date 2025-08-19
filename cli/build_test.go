package main

import (
	"fmt"
	"os"
	"path/filepath"
	"testing"
)

func TestGenerateBuildZipFile(t *testing.T) {
	version := "0.0.1"
	err := GenerateBuildZipFile(version)

	if err != nil {
		t.Error(err)
	}

	rootPath, err := GetRootPath()
	if err != nil {
		t.Error(err)
	}

	buildFolderPath := filepath.Join(rootPath, "chromeBuild_test")
	distPath := filepath.Join(rootPath, "dist")
	buildFilePath := fmt.Sprintf("%s/%s-%s.zip", buildFolderPath, "chromeBuild", version)

	paths := []string{
		buildFolderPath,
		distPath,
		buildFilePath,
	}

	defer func() {
		os.RemoveAll(buildFolderPath)
		os.RemoveAll(distPath)
		os.RemoveAll(buildFilePath)
	}()

	for _, path := range paths {
		if !ExistFile(path) {
			t.Errorf("%s does not exist", path)
		}
	}

}

func TestDeleteBuildFolder(t *testing.T) {
	rootPath, err := GetRootPath()
	if err != err {
		t.Error(err)
	}
	buildFolderPath := filepath.Join(rootPath, "dist_test")
	testFilePath := filepath.Join(buildFolderPath, "test")

	os.Mkdir(buildFolderPath, 0755)
	os.WriteFile(
		testFilePath,
		[]byte("test"),
		0644,
	)

	checkPaths := []string{buildFolderPath, testFilePath}
	for _, p := range checkPaths {
		if !ExistFile(p) {
			t.Errorf("%s does not exist", buildFolderPath)
		}
	}

	err = deleteBuildFolder()
	if err != nil {
		t.Error(err)
	}

	if ExistFile(buildFolderPath) {
		t.Error("Build folder still exists")
	}
}
