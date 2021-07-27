import pandas as pd
import flask
from flask import request, jsonify

app = flask.Flask(__name__)
app.config["DEBUG"] = True

data_file = "../csv/merged_music_data.csv"
data_df = pd.read_csv(data_file)


data_dict = data_df.groupby('Artist').apply(lambda dfg: dfg.to_dict(orient='list')).to_dict()

@app.route('/', methods=['GET'])
def home():
    return data_dict

# A route to return all of the available entries in our catalog.
@app.route('/api/v1/resources/books/all', methods=['GET'])
def api_all():
    return jsonify(data_dict)

app.run()
