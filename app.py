from flask import Flask, render_template, jsonify
from keygen import generate_keys

app = Flask(__name__)

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/generate")
def generate():
    return jsonify({"keys": generate_keys(20)})

if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0", port=5000)