import csv
import urllib
import urllib.request

filename = './apps3.csv'
with open(filename) as f:
    reader = csv.reader(f)
    x = 0
    for row in reader:
        url_value = {'query':row}
        url_value = urllib.parse.urlencode(url_value)
        url='http://api.map.baidu.com/place/v2/search?%s&location=38.035,114.484&radius=20000&output=json&ak=8ST2udBT0HRxaZ06QyBod6bn3UGbRbK7' % (url_value)
        data = urllib.request.urlopen(url).read()
        data=data.decode('UTF-8')
        print(type(data))
        x +=1
        if x >10:
            break

