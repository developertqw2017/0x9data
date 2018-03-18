from flask import Flask
import pymysql
import request
import json

sbsbm = request.form.get("sbsbm")
app = Flask(__name__)

@app.route("/")
def he():
    #db = pymysql.connect("10.254.1.61","HEBSJZ_96365","hebqts@1811","HEBSJZ_96365DB")
    #cursor = db.cursor()
    #cursor.execute("SELECT * FROM WXCXGNDB WHERE SBZCDM = '31101301022010080004'")
    #data = cursor.fetchall()
    #json = json.dumps(data, ensure_ascii=False)
    return "qq"

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=80)
