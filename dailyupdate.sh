#!/bin/sh
sudo apt update
UPDATES=$(aptitude search "~U" | wc -l)
curl -X POST -H "Content-Type: application/json" -d '{"content": "There are '"$UPDATES"' updates available for '"$(hostname)"'"}' https://discord.com/api/webhooks/1258699376331587636/GSz0KQNSIevl4GJmCsvyqgOQV6OZAFqVgjgEIpecGBHRivjfZiDAn0cobiu8D3YLmp4Q
