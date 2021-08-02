from flask import Flask, render_template, jsonify
from sqlalchemy import create_engine
import numpy as np
from config import username, password, port, db_name
import pandas as pd
from flask_cors import CORS, cross_origin

# Flask Setup
app = Flask(__name__)
CORS(app)
# Database Setup using SQLAlchmy ORM
URI = f"postgresql://{username}:{password}@localhost:{port}/{db_name}"
engine = create_engine(URI)

# Map table

@app.route('/')
def home():
    return render_template("index_nks.html")
@app.route("/everything")
def everything():
	df = pd.read_sql("""SELECT * FROM merged_music;""", engine)
	results = df.to_dict(orient = "records")

	return jsonify(results)

if __name__ == "__main__":
    app.run(debug=True)
