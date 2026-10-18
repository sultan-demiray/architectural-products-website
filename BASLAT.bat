@echo off
setlocal
cd /d "%~dp0"

where php >nul 2>nul
if errorlevel 1 (
  echo PHP bulunamadi.
  echo PHP 8 veya XAMPP kurduktan sonra bu dosyayi yeniden calistirin.
  pause
  exit /b 1
)

echo Likya Yapi PHP sunucusu baslatiliyor...
echo Tarayici adresi: http://localhost:8080
start "" http://localhost:8080
php -S localhost:8080 router.php
