from flask import Flask, jsonify, request
from DBConnection import DBConnection
import pymongo

from bson.json_util import dumps


app = Flask(__name__)

#TODO: refactor this to another file
try:
    my_conn = DBConnection("virtualspiceapp", "spice", "SpiceAdmin","SpiceAdmin123")
except pymongo.errors.OperationFailure:
    print("Authentication error: The Username or Password is not valid")

@app.route("/api/virtualspice")
def virtualspice():
    return dumps(my_conn.find_all_items())

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
    


