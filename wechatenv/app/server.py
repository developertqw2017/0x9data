from flask import Flask
app = Flask(__name__)

@application.route('/')
def index():
    return '<h1>Hey</h1>'

