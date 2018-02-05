from flask import Flask

app = Flask(__name__)

@app.route("/ping")
def ping():
	return str({ "hello": "world" }) + str("")

if __name__ == '__main__':
	app.run(host="0.0.0.0", port=7880)

