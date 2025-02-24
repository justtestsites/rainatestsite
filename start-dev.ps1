#!/usr/bin/env pwsh

# Set prompt to empty string to avoid PS> prefix
function prompt { "" }

# Stop any existing node processes
Get-Process -Name "node" -ErrorAction SilentlyContinue | Stop-Process -Force

# Set environment variables
$env:NODE_OPTIONS = "--no-warnings"

# Start the Next.js development server
Write-Output "Starting Next.js development server..."
& npm run dev 