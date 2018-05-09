import csv
import os
from os.path import join as pjoin
import urllib
import urllib.request
import json
import time

filename_read = './apps3.csv'
filename_write = 'results4.json'
output_dir = './'
listdir = os.listdir(output_dir)
with open(filename_read) as f:
    reader = csv.reader(f)
    x = 0
    write_da = []
    for row in reader:
        url_value = {'query':row}
        url_value = urllib.parse.urlencode(url_value)
        url='http://api.map.baidu.com/place/v2/search?%s&location=38.035,114.484&radius=20000&output=json&ak=8ST2udBT0HRxaZ06QyBod6bn3UGbRbK7' % (url_value)
        data = urllib.request.urlopen(url).read()
        data=data.decode('UTF-8')
        data_a = json.loads(data)
        data_a = data_a['results']
        write_da.append(data_a)
        if x%10==0:
            if filename_write in listdir:
                fw = open(pjoin(output_dir,filename_write))
                model = json.load(fw)
                fw.close()

                for i in write_da[0]:
                    model.append(i)
                jsObj = json.dumps(model)

                with open(pjoin(output_dir,filename_write),'w') as fw:
                    fw.write(jsObj)
                    fw.close()
               # print("暂停1s : %s" % time.ctime())
               # time.sleep(1)
               # print("re : %s" % time.ctime())
                print("写入json文件，第%s 条" %(x) )
        x +=1
        #if x < 0:
            #x为读取位置信息的次数
        #    print("此次更新 %s 条" %(x))
        #    break

