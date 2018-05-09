import csv
import urllib
import urllib.request
import json


filename_read = './apps3.csv'
filename_write = './results3.txt'
with open(filename_read) as f:
    reader = csv.reader(f)
    x = 0
    write_da = []
    for row in reader:
        url_value = {'query':row}
        url_value = urllib.parse.urlencode(url_value)
        url='http://api.map.baidu.com/place/v2/search?%s&location=38.035,114.484&radius=20000&output=json&ak=I8XL3z3XXRH2I8SxstyDxGPw6GpXKiGq' % (url_value)
        data = urllib.request.urlopen(url).read()
        data=data.decode('UTF-8')
        data_a = json.loads(data)
        data_a = data_a['results']
        write_da.append(data_a)
        if x%100==0:
            with open(filename_write,'a') as fw:
                json.dump(data_a, fw)
                print("写入json文件，第%s 条" %(x) )
        x +=1
        if x < 0:
            print("此次更新 %s 条" %(x))
            break

