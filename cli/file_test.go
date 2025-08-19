package main

import (
	"os"
	"path/filepath"
	"testing"
)

func TestGetRootPath(t *testing.T) {
	rootPath, err := GetRootPath()
	wd, err := os.Getwd()
	parentPath := filepath.Join(wd, "..")

	if err != nil {
		t.Error(err)
	}

	if rootPath == "" {
		t.Error("Empty path returned")
	}

	if rootPath != parentPath {
		t.Errorf("%s should be %s", rootPath, parentPath)
	}
}
