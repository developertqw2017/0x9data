#encoding=utf-8
from flask import Flask,request
import pymysql
#import request
import json

#sbsbm = request.form.get("sbsbm")
app = Flask(__name__)

@app.route("/")
def he():
    code_type = request.args.get("x")
    device_code = request.args.get("y")
    db = pymysql.connect("10.254.1.61","HEBSJZ_96365","hebqts@1811","HEBSJZ_96365DB",charset='utf8')
    cursor = db.cursor()
    cursor.execute("SELECT * FROM WXCXGN WHERE %s = '%s'" % (code_type, device_code))
    data = cursor.fetchall()
    if data == ():
        return 404
    return json.dumps(data) #.decode('utf-8')

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=80)
