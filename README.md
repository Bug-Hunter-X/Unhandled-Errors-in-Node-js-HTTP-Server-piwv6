# Unhandled Errors in Node.js HTTP Server

This repository demonstrates a common error in Node.js applications: the lack of proper error handling in an HTTP server. The `bug.js` file shows the problematic code, while `bugSolution.js` provides a corrected version with comprehensive error handling.

## Problem

The original code doesn't handle potential errors that can occur during server creation or request processing. This can lead to the server crashing silently or behaving unexpectedly, making debugging difficult.

## Solution

The solution involves using `server.on('error', ...)` to handle potential server-side errors and using try...catch blocks within the request handler to catch any errors during request processing. This ensures graceful error handling and prevents unexpected application crashes.