package main

import (
	"fmt"
	"os"
)

const usage = `Usage: job-scanner <command> [args]

Commands:
  version             Print the current version
  version <new>       Set the version across package.json, manifest.json, .env
  build               Build the extension and produce a zip in chromeBuild/
  help                Show this help

Examples:
  job-scanner version
  job-scanner version 1.2.0
  job-scanner build
`

func main() {
	if len(os.Args) < 2 {
		fmt.Print(usage)
		os.Exit(1)
	}

	switch os.Args[1] {
	case "version":
		RunVersion(os.Args[2:])
	case "build":
		RunBuild(os.Args[2:])
	case "help", "-h", "--help":
		fmt.Print(usage)
	default:
		fmt.Fprintf(os.Stderr, "unknown command: %s\n\n", os.Args[1])
		fmt.Fprint(os.Stderr, usage)
		os.Exit(1)
	}
}
