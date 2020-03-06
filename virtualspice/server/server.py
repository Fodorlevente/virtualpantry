from flask import Flask, jsonify, request

app = Flask(__name__)

__food_types = ["tartos", "fuszer", "ital"]
foods = {
    "barack":{
        "quantity": 10,
        "exp date": "2020. 04.02.",
        "location": "spar",
        "type": __food_types[0]
    },
    "alma":{
        "quantity": 10,
        "exp date": "2020. 04.02.",
        "location": "spar",
        "type":  __food_types[0]
    },
    "kóla":{
        "quantity": 10,
        "exp date": "2020. 04.02.",
        "location": "spar",
        "type": __food_types[0]
    },
    "kenyér":{
        "quantity": 1,
        "exp date": "2020. 04.02.",
        "location": "spar",
        "type":  __food_types[0]
    }
}

@app.route("/foods")
def hello():
    return"Hello VirtualSpice!"


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


if __name__ == "__main__":
    app.run(port=5000)





