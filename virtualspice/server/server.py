from flask import Flask

app = Flask(__name__)

@app.route("/")
def hello():
    return "Hello, VirtualSpice!"

@app.route("/api/virtualspice")
def virtualspice():
    return "virtualspice"

@app.route("/api/shoppinglist")
def shoppinglist():
    return "shoppinglist"

@app.route("/api/recepies")
def recepies():
    return "recepies"

@app.route("/api/login")
def login():
    return "login"




