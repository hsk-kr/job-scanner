#!/bin/sh
set -e

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
BIN_DIR="$ROOT/bin"

mkdir -p "$BIN_DIR"
(cd "$ROOT/cli" && go build -o "$BIN_DIR/job-scanner" .)

cat <<EOF

Built job-scanner -> $BIN_DIR/job-scanner

To use 'job-scanner' from anywhere, add this directory to your PATH.

  For zsh (default on macOS):
    echo 'export PATH="$BIN_DIR:\$PATH"' >> ~/.zshrc && source ~/.zshrc

  For bash:
    echo 'export PATH="$BIN_DIR:\$PATH"' >> ~/.bashrc && source ~/.bashrc

  For fish:
    fish_add_path $BIN_DIR

  Temporary (this shell only):
    export PATH="$BIN_DIR:\$PATH"

Verify with:
  job-scanner help

EOF
