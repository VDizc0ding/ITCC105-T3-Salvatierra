# Von David Salvatierra — Academic Portfolio

A responsive portfolio website built with **Python (Flask), HTML, CSS, and JavaScript**. It follows the requested portfolio sections:
- Welcome page
- About Me
- Academics & Relevant Works
- Prelim, Midterm, and Final Term reflections

## 1. Open in VS Code

1. Extract this ZIP file.
2. Open the `von_portfolio` folder in Visual Studio Code.
3. Open the VS Code terminal (`Terminal > New Terminal`).

## 2. Run locally with Python

Create and activate a virtual environment (optional but recommended):

```bash
python -m venv .venv
```

Windows PowerShell:
```powershell
.venv\Scripts\Activate.ps1
```

Install Flask:
```bash
pip install -r requirements.txt
```

Run the website:
```bash
python app.py
```

Open **http://127.0.0.1:5000** in your browser.

## 3. Add your own photos and screenshots

- Replace `static/images/profile-placeholder.svg` with your own portrait (or update the image paths in `templates/index.html`).
- Put permanent screenshots in `static/images/` or `static/uploads/`.
- The "Add screenshot" controls let you preview an image in your browser while editing. They are intentionally local previews; they do not upload files to a public server.
- For a permanent hosted image, copy it into `static/uploads/`, then update the matching `<img src="...">` in `templates/index.html`. Example:

```html
<img src="{{ url_for('static', filename='uploads/my-java-output.png') }}" alt="Java program output">
```

## 4. Add PDFs and videos

Copy your files into `static/uploads/`, then change the `href` of the relevant link in `templates/index.html`.

Examples:
```html
<a href="{{ url_for('static', filename='uploads/coursework-compilation.pdf') }}" target="_blank">Open PDF</a>
<a href="{{ url_for('static', filename='uploads/project-presentation.mp4') }}" target="_blank">Open video</a>
```

For a YouTube presentation, replace the video placeholder with an embed:
```html
<iframe width="100%" height="420"
  src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
  title="Project presentation" allowfullscreen></iframe>
```

## 5. Edit your details and reflections

Open `templates/index.html` and edit the text directly. The About Me section is based on the profile screenshot you supplied. Review dates, titles, and organization names before publishing. The three reflection cards are prompts/placeholders; replace them with your own Computer Programming 1 narrative reflections for each term.

## 6. Host it online

This is a Flask app, so use a Python-compatible hosting service (for example, Render):
1. Create a GitHub repository and upload this project.
2. Create a new **Web Service** on Render and connect the repository.
3. Use these settings:
   - Build command: `pip install -r requirements.txt`
   - Start command: `gunicorn app:app`
4. Deploy. Render will provide a public URL.

Do not put private information (student number, personal contact details, or private documents) on a public portfolio unless you have permission and are comfortable sharing them. This starter site does not include a login system or public upload endpoint. Add files to the project before deploying rather than allowing anonymous public uploads.
