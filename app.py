from flask import Flask, render_template, request, redirect, url_for

from flask_sqlalchemy import SQLAlchemy  # importing for database setup
from dotenv import load_dotenv  # importing from dotenv package
import os

load_dotenv()  # Load .env file

db_password = os.getenv("DB_PASSWORD")
port = os.getenv("PORT")

app = Flask(__name__)
app.config["SQLALCHEMY_DATABASE_URI"] = (
    f"postgresql://postgres:{db_password}@localhost:{port}/planit_db"
)
db = SQLAlchemy(app)


class Data(db.Model):
    __tablename__ = "usertasks"
    id = db.Column(db.Integer, primary_key=True)
    task = db.Column(db.String(256))
    category = db.Column(db.String(128))
    priority = db.Column(db.String(128))

    def __init__(self, pTask, pCategory, pPriority):
        self.task = pTask
        self.category = pCategory
        self.priority = pPriority


with app.app_context():
    db.create_all()


# * GET request
@app.route("/")
def index():
    tasks = Data.query.all()
    return render_template("index.html", tasks=tasks)


# * POST request
@app.route("/", methods=["POST"])
def submit():
    if request.method == "POST":
        task_info = request.form["task-box"]
        task_category = request.form["category"]
        task_priority = request.form["priority"]

        # testing out
        print(f"Received: {task_info}, {task_category}, {task_priority}")

        new_task = Data(task_info, task_category, task_priority)
        db.session.add(new_task)
        db.session.commit()

    # Since we're using one html file, we want to refresh the page once the user triggers the POST request
    # render_template would likely double the submissions
    return redirect(url_for("index"))


if __name__ == "__main__":
    app.run(debug=True)
