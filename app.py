from flask import Flask, render_template, request
# from flask_sqlalchemy import SQLAlchemy # importing for database setup
# from dotenv import load_dotenv # importing from dotenv package
# import os

# load_dotenv()  # Load .env file

app = Flask(__name__)
# app.config["SQLALCHEMY_DATABASE_URI"] = (
#     f"postgresql://postgres:{DB_PASSWORD}@localhost:{PORT}/bmi_db"    
# )
# db = SQLAlchemy(app)

@app.route("/")
def index():
    return render_template("index.html")
  
# class Data(db.model):
#     __tablename__ = "usertasks"
#     id = db.Column(db.Integer, primary_key=True)
#     task = db.Column(db.String(256))
#     category = db.Column(db.String(128), unique=True)
#     priority = db.Column(db.String(128))
    
#     def __init__(self, ptask, pcategory, ppriority):
#       self.task = ptask
#       self.category = pcategory
#       self.priority = ppriority

# with app.app_context():
#     db.create_all()

# @app.route("/", method=['POST'])
# def submit():
#   if request.method == "POST":
#     task_info = request.form["task-box"]
#     task_category = request.form["task-box"]
#     task_priority = request.form["task-box"]
    
#     return render_template(
#       task_info,
#       task_category,
#       task_priority
#     )



if __name__ == '__main__':
    app.run(debug=True)

