from django.shortcuts import render
from django.http import JsonResponse
from .models import *
from django.core import serializers
from django.contrib.auth import logout,login,authenticate
#from django.contrib.auth.models import User
from users.models import User, device
from django.views.decorators.csrf import csrf_exempt

from .checkuser import checkdata
import requests

# Create your views here.
def test(request):
    return JsonResponse({'data':'info'})

#处理登录
@csrf_exempt
def verify_user(request):
    if "POST" == "POST":
        #print(request.POST)
        #初始化返回的字典
        data = {}

        #获取小程序数据
        code = request.POST.get('code')
        encrypteddata = request.POST.get('encrypteddata')
        iv = request.POST.get('iv')

        #检查用户
        res = checkdata(code, encrypteddata, iv)
        #print('解码信息',res)
        #检查不通过
        errorinfo = res.get('error',None)
        if errorinfo:
            return JsonResponse(res)

        openid = res['openid']

        user = authenticate(username=openid,password=openid)
        #登录用户并保存cookie
        if user:
            login(request, user)
            query_user = User.objects.get(openid=openid)
            query_user.cookie = res['cookie']
            query_user.last_name = '15827554095'
            query_user.save()

            #获取用户发送的信件
            data['status'] = '已登录'
        #新建用户
        else:
            user_ins = User.objects.create_user(
                username=openid,
                password=openid,
                openid=openid,
                cookie=res['cookie'],
            )
            new_user = authenticate(username=openid, password=openid)
            login(request, new_user)
            data['status'] = '已创建并登录'

        data['info'] = res
        #print('最终返回信息', data)
        data['device'] = checkqr(code,res['cookie'])
        return JsonResponse(data)
    data = {'error':'仅接受POST请1求'}
    return JsonResponse(data)

# 索引数据库
@csrf_exempt
def checkqr(code,cookie):
    # pass
    if 'POST' == 'POST':

        data = {}
        qrcode = code
        cookie = cookie

        # 验证用户
        profiles = User.objects.filter(white_list='15827554095')
        

        if len(profiles) != 1:
            
            data = {'error': '用户错误'}
            return JsonResponse(data)

        profile = profiles[0]

        # 获取设备
        rets = []
        device_list = profile.device
        print(type(device_list))
        print(device_list)
        if device_list == '1':
            data = {'exist': 'none_existed'}
            return data
        devices = list(eval(device_list))
        if len(devices) == 0 or device_list == '1':

            data = {'exist': 'none_existed'}
            return data
        for x in devices:
            res = device.objects.get(id = int(x))
            rets.append((res.id,res.SYDWNBBH))
        
        # 组装数据
        data['device_info'] = rets

        return data


    data = {'error': '仅接受POST请求'}
    return data

@csrf_exempt
def datain(request):

    if request.method == 'POST':

        data = {}
        qrcode = request.POST.get('code', None)
        cookie = request.POST.get('cookie')
        dir = request.POST.get('dir')

        # 检查用户
        profiles = User.objects.filter(cookie=cookie)
        if len(profiles) != 1:
            data = {'error': '用户错误'}
            return JsonResponse(data)
        profile = profiles[0]

        data['noexist_id'] = []
        for x in qrcode:
            device_qr = device.objects.filter(id = x)
            if len(device_qr) == 1:
                
                device_qr.freq +=1
                device_qr.save()
                data['exist'] = 'existed'
             # 添加日志记录
                new_log = Log.objects.create(
                    owner=profile,
                    type='0',
                    device=device
                )
            else:
                data['exist'] = 'no'
                data['noexist_id'].append(x)


        return JsonResponse(data)


    data = {'error': '仅接受POST请求'}
    return JsonResponse(data)



