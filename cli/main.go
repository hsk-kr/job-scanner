package main

import "fmt"

func main() {
	err := StartUI()
	if err != nil {
		fmt.Printf("error: %s\n", err.Error())
	}
}
