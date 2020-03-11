"""
"""

from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask("tweeter")
CORS(app)

db = {
    "pepe": {
        "tweets": [
            "this is a tweet from pepe",
            "this is another tweet from pepe"
        ],
        "following": []
    }
}

@app.route("/timeline/<user>", methods = ["GET"])
def home(user):
    result = []

    if user in db:
        for tweet in db[user]["tweets"]:
            result.append({"user": user, "tweet": tweet})

        for other in db[user]["following"]:
            for tweet in db[other]["tweets"]:
                result.append({"user": other, "tweet": tweet})

    return jsonify(result)

@app.route("/tweet", methods = ["PUT", "POST"])
def create_tweet():
    """
    this handler expects a json body of the following shape:
    {
        "user": "whatever",
        "tweet": "whatever"
    }
    """
    data = request.get_json()
    username = data["user"]
    
    if username in db:
        db[username]["tweets"].append(data["tweet"])
    else:
        db[username] = {
            "tweets": [data["tweet"]],
            "following": []
        }

    return "OK"

@app.route("/user/<follower>/follow/<followee>", methods = ["POST"])
def follow(follower, followee):
    if follower in db:
        db[follower]["following"].append(followee)

    return "OK"

app.run()
