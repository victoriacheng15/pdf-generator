#!/bin/bash

echo "Do you need to clean the dist folder? (y/n)"
IFS= read -r answer

echo "$answer"

if [ "$answer" = "y" ]; then
  npm run clean
  sleep 2
  npm run start
else
  npm run start
fi
