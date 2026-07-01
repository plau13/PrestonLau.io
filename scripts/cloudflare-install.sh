#!/usr/bin/env bash
set -euo pipefail

# Cloudflare defaults to Yarn 4 when it sees yarn.lock, but this project uses Yarn 1.
corepack enable
corepack prepare yarn@1.22.22 --activate
yarn install --frozen-lockfile
