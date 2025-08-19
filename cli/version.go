package main

import (
	"bufio"
	"encoding/json"
	"errors"
	"fmt"
	"log"
	"os"
	"path/filepath"
	"strings"
)

type PackageProps struct {
	Version string `json:"version"`
}

func getManifestJsonFilePath() (string, error) {
	rootPath, err := GetRootPath()
	if err != nil {
		return "", err
	}
	path := filepath.Join(rootPath, "public", "manifest.json")

	if !ExistFile(path) {
		return "", errors.New("Cannot find manifest.json")
	}

	return path, nil
}

func getPackageJsonFilePath() (string, error) {
	rootPath, err := GetRootPath()
	if err != nil {
		return "", err
	}
	path := filepath.Join(rootPath, "package.json")

	if !ExistFile(path) {
		return "", errors.New("Cannot find package.json")
	}

	return path, nil
}

func getEnvFilePath() (string, error) {
	rootPath, err := GetRootPath()
	if err != nil {
		return "", err
	}
	path := filepath.Join(rootPath, ".env")

	if !ExistFile(path) {
		return "", errors.New("Cannot find .env")
	}

	return path, nil
}

func GetVersion() (string, error) {
	path, err := getPackageJsonFilePath()

	if err != nil {
		return "", err
	}

	dat, err := os.ReadFile(path)
	if err != nil {
		return "", err
	}

	var props PackageProps
	err = json.Unmarshal(dat, &props)
	if err != nil {
		return "", err
	}

	return props.Version, nil
}

func updateJsonVersion(path, version string) error {
	f, err := os.OpenFile(path, os.O_RDWR, os.ModePerm)
	if err != nil {
		return err
	}
	defer f.Close()

	updatedPackage := ""
	sc := bufio.NewScanner(f)
	for sc.Scan() {
		line := sc.Text()
		trimmedLine := strings.TrimSpace(line)

		tokens := strings.Split(line, ":")

		if strings.TrimSpace(tokens[0]) == "\"version\"" {
			comma := ","
			notEndsWithComma := trimmedLine[len(trimmedLine)-1] != ','
			if notEndsWithComma {
				comma = ""
			}

			updatedPackage += fmt.Sprintf("  \"version\": \"%s\"%s\n", version, comma)
		} else {
			updatedPackage += line + "\n"
		}
	}

	if err := sc.Err(); err != nil {
		log.Fatalf("scan file error: %v", err)
		return err
	}

	err = os.WriteFile(path, []byte(updatedPackage), 0644)
	return err
}

func updateEnvVersion(version string) error {
	path, err := getEnvFilePath()

	f, err := os.OpenFile(path, os.O_RDWR, os.ModePerm)
	if err != nil {
		return err
	}
	defer f.Close()

	updatedEnv := ""

	sc := bufio.NewScanner(f)
	for sc.Scan() {
		line := sc.Text()

		tokens := strings.Split(line, "=")

		if tokens[0] == "VITE_VERSION" {
			updatedEnv += "VITE_VERSION=" + version + "\n"
		} else {
			updatedEnv += line + "\n"
		}
	}

	if err := sc.Err(); err != nil {
		log.Fatalf("scan file error: %v", err)
		return err
	}

	err = os.WriteFile(path, []byte(updatedEnv), 0644)
	return err
}

func UpdateVersion(version string) error {
	packageJsonPath, err := getPackageJsonFilePath()
	if err != nil {
		return err
	}

	manifestJsonPath, err := getManifestJsonFilePath()
	if err != nil {
		return err
	}

	err = updateJsonVersion(packageJsonPath, version)
	if err != nil {
		return err
	}

	err = updateJsonVersion(manifestJsonPath, version)
	if err != nil {
		return err
	}

	err = updateEnvVersion(version)
	return err
}
