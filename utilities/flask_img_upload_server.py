import os
import sys
from flask import Flask, request
import datetime
from flask_cors import cross_origin
import mongoengine as me
import json

app = Flask(__name__)
me.connect("nemo")
FILENAME_STR = "filename="

class User(me.Document):
        username = me.StringField()
        password = me.StringField()
        email = me.StringField()
        interests = me.StringField()

class Token(me.Document):
    token = me.StringField()
    username = me.StringField()

def get_user(token):
    token_obj = Token.objects(token=token)[0] if Token.objects(token=token) else None
    if token_obj is None:
        return None
    try:
        os.mkdir("/home/ubuntu/nemo-stuff/src/gui/res/" + token_obj.username)
    except Exception:
        pass
    return token_obj.username

@app.route("/nemo_res/images", methods=["POST"])
@cross_origin()
def catalogue_add_data():
    username = get_user(request.args['token'])
    if username is None:
        return json.dumps({"Result": "Not OK"})

    start_indx = request.data.find(FILENAME_STR) + len(FILENAME_STR) + 1
    end_indx = request.data.find("Content-Type") - 3
    filename = request.data[start_indx:end_indx]

    indx = request.data.find("Content-Type: image/png")
    data = request.data[indx + len("Content-Type: image/png\r\n\r\n"):]
    print("username: {}, filename: {}".format(username, filename))

    with open("/home/ubuntu/nemo-stuff/src/gui/res/" + username + "/" + filename, "w") as fp:
        fp.write(data)
    return json.dumps({"Result": "OK"})

if __name__ == '__main__':
    app.run(host="0.0.0.0", port=56713)
