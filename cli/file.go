package main

import (
	"archive/zip"
	"errors"
	"fmt"
	"io"
	"os"
	"path/filepath"
	"strings"
)

func ExistFile(filePath string) bool {
	_, error := os.Stat(filePath)
	return !errors.Is(error, os.ErrNotExist)
}

func ZipFolder(zipPath, dirPath string) error {
	if !ExistFile(dirPath) {
		return fmt.Errorf("%s does not exist", dirPath)
	}

	archive, err := os.OpenFile(zipPath,
		os.O_RDWR|os.O_CREATE|os.O_TRUNC,
		0644,
	)
	if err != nil {
		return err
	}
	defer archive.Close()

	zipWriter := zip.NewWriter(archive)
	defer zipWriter.Close()
	rootPath := dirPath
	allFilePaths := []string{}

	var readFiles func(filePath string) error
	readFiles = func(filePath string) error {
		files, err := os.ReadDir(filePath)
		if err != nil {
			return err
		}

		for _, file := range files {
			currentFilePath := filepath.Join(rootPath, file.Name())
			if file.IsDir() {
				rootPath = currentFilePath
				err := readFiles(rootPath)
				if err != nil {
					return err
				}
				rootPath = filepath.Dir(rootPath)
			} else {
				allFilePaths = append(allFilePaths, currentFilePath)
			}
		}

		return nil
	}

	err = readFiles(rootPath)
	if err != nil {
		return err
	}

	for _, filePath := range allFilePaths {
		f, err := os.Open(filePath)
		if err != nil {
			return err
		}
		defer f.Close()

		filePathForZip := strings.TrimLeft(filePath, ".")
		filePathForZip = filePathForZip[len("/dist/"):]
		w, err := zipWriter.Create(filePathForZip)
		if err != nil {
			return err
		}
		if _, err := io.Copy(w, f); err != nil {
			return err
		}
	}

	return nil
}
