from flask import Flask, jsonify, request

app = Flask(__name__)

@app.route("/api/virtualspice")
def virtualspice():
    return jsonify(foods)

@app.route("/api/shoppinglist")
def shoppinglist():
    return "shoppinglist"

@app.route("/api/recepies")
def recepies():
    return "recepies"

@app.route("/api/login")
def login():
    return "login"


if __name__ == "__main__":
    app.run(port=5000)





