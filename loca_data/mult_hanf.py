from multiprocessing import Pool
import os, time, random
import json
import csv
import urllib
import urllib.request

def req_data(name,id_index=0,id_index2=100):
    print('Run task %s (%s)...' % (name, os.getpid()))
    filename_read = './apps3.csv'
    filename_write = './results1.txt'
    with open(filename_read) as f:
        reader = csv.reader(f)
        x = 0
        write_da = []
        for row in reader:
            if x < id_index:
                x +=1
                continue
            url_value = {'query':row}
            url_value = urllib.parse.urlencode(url_value)
            try:

                url='http://api.map.baidu.com/place/v2/search?%s&location=38.035,114.484&radius=20000&output=json&ak=8ST2udBT0HRxaZ06QyBod6bn3UGbRbK7' % (url_value)
                data = urllib.request.urlopen(url).read()
            except:
                print("Error: ak失效或网络请求错误")
            data=data.decode('UTF-8')
            try:
                data_a = json.loads(data)
                data_a = data_a['results']
                print(x)
                write_da.append(data_a)
            except:
                print("Error: unable to get data")
            if x%100==0:
                with open(filename_write,'a') as fw:
                    json.dump(data_a, fw)
                    print("写入json文件，第%s 条" %(x) )
            x +=1
            if x > id_index2:
                print("此次更新 %s 条" %(x))
                break

if __name__=='__main__':
    print('Parent process %s.' % os.getpid())
    p = Pool(4)
    id_index=[0,200,300,700,800,1200]
    for i in range(5):
        p.apply_async(req_data, args=(i,id_index[i],id_index[i+1]))
    print('Waiting for all subprocesses done...')
    p.close()
    p.join()
    print('All subprocesses done.')
