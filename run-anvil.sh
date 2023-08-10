#!/bin/bash

# Get the script's directory
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" &> /dev/null && pwd)"

# Load environment variables from the .env file
if [ -f "${SCRIPT_DIR}/.env" ]; then
  export $(grep -v '^#' "${SCRIPT_DIR}/.env" | xargs)
else
  echo "Error: .env file not found in the script's directory."
  exit 1
fi

# Check if the required environment variables are set
if [ -z "$RPC_HTTP_URL" ] || [ -z "$FORK_BLOCK_NUMBER" ]; then
  echo "Error: Please set both RPC_HTTP_URL and FORK_BLOCK_NUMBER in the .env file."
  exit 1
fi

# Run the anvil command with the environment variables
anvil --fork-url "$RPC_HTTP_URL" --fork-block-number "$FORK_BLOCK_NUMBER" --chain-id 1
