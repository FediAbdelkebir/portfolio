#!/bin/bash

# Create a temporary directory for testing
TEST_DIR="./github-pages-test"
mkdir -p "$TEST_DIR"

# Run the build command
echo "Building the React app..."
npm run build

# Copy the built files from dist/public to the test directory
echo "Copying files to $TEST_DIR..."
cp -r ./dist/public/* "$TEST_DIR"/

# Copy public directory files (they're needed for GitHub Pages)
echo "Copying public files..."
cp -r ./client/public/* "$TEST_DIR"/

# Create a simple server to test the build
echo "Starting a test server on port 8080..."
cd "$TEST_DIR"
python3 -m http.server 8080 &
SERVER_PID=$!

echo ""
echo "==================================================="
echo "GitHub Pages test server running!"
echo "==================================================="
echo "Open your browser and navigate to: http://localhost:8080"
echo "This simulates how your site will behave on GitHub Pages"
echo "Test navigation between routes and ensure everything works"
echo ""
echo "To stop the server, press Ctrl+C"
echo "==================================================="

# Wait for user to press Ctrl+C
trap "kill $SERVER_PID; rm -rf $TEST_DIR; echo 'Test server stopped and files cleaned up.'; exit 0" INT
wait
