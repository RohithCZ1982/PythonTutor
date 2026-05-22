Stop any running Flask/Gunicorn process for PythonTutor, then start the app fresh in the background.

```bash
cd /home/user/PythonTutor
pkill -f "python app.py" 2>/dev/null || true
pkill -f "gunicorn app:app" 2>/dev/null || true
sleep 1
python app.py
```
