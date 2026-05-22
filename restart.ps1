# restart.ps1 — Stop any running instance of app.py and start a fresh one

$PY   = "C:\Users\Rohith\AppData\Local\Python\pythoncore-3.12-64\python.exe"
$APP  = "$PSScriptRoot\app.py"
$PORT = 5000

# Kill any python process already holding the port
$procs = Get-NetTCPConnection -LocalPort $PORT -ErrorAction SilentlyContinue |
         Select-Object -ExpandProperty OwningProcess -Unique
if ($procs) {
    $procs | ForEach-Object { Stop-Process -Id $_ -Force -ErrorAction SilentlyContinue }
    Write-Host "Stopped process(es) on port $PORT."
}

# Also kill stray python.exe processes running app.py
Get-WmiObject Win32_Process -Filter "Name='python.exe'" |
    Where-Object { $_.CommandLine -like "*app.py*" } |
    ForEach-Object { Stop-Process -Id $_.ProcessId -Force -ErrorAction SilentlyContinue }

Start-Sleep -Seconds 1

Write-Host "Starting app.py on port $PORT ..."
& $PY $APP
