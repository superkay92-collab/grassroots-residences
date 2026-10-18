@echo off
cd /d "%~dp0"
start "" cmd /k "npm run dev"
start "" "http://127.0.0.1:5173/"