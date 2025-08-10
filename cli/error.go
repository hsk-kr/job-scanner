package main

import (
	"fmt"
	"os"
)

func DisplayErrorAndExit(err error) {
	fmt.Printf("Error: %s\n", err.Error())
	os.Exit(1)
}
