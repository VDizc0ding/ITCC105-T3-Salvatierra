
from flask import Flask, render_template
from pathlib import Path

app = Flask(__name__)

IMAGE_FOLDER = Path(app.static_folder) / "images"

ALLOWED_EXTENSIONS = {
    ".png",
    ".jpg",
    ".jpeg",
    ".svg",
    ".webp",
    ".gif"
}


def get_images(folder_name):
    folder = IMAGE_FOLDER / folder_name

    if not folder.exists():
        return []

    images = []

    for file in sorted(folder.iterdir(), key=lambda x: x.name.lower()):
        if file.is_file() and file.suffix.lower() in ALLOWED_EXTENSIONS:
            images.append(f"images/{folder_name}/{file.name}")

    return images


@app.route("/")
def home():
    return render_template(
        "index.html",
        profile_images=get_images("profile"),
        activity_images=get_images("activities"),
        project_images=get_images("projects"),
        quiz_images=get_images("quizzes")
    )


if __name__ == "__main__":
    app.run(debug=True)
