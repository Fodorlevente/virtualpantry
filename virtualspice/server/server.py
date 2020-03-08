from flask import Flask, jsonify, request
from DBConnection import DBConnection
import pymongo

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
    try:
        my_conn = DBConnection("virtualspiceapp", "spice", "SpiceAdmin","SpiceAdmin123")
        my_conn.print_results(my_conn.find_all_items())
        app.run(port=5000)
    except pymongo.errors.OperationFailure:
        print("Authentication error: The Username or Password is not valid")


