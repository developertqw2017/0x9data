from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.
'''
@upkeep 物业名称
@device 用户可管理的设备 物业管理员账户不必填写
@openid 微信小程序appid与用户微信号加密生成的身份识别id
@white_list 物业管理管理的注册用户白名单
@user_rights 用户权限
'''
class User(AbstractUser):
    upkeep = models.CharField(max_length=255,default='')
    device = models.CharField(max_length=255,verbose_name='物业',default='1')
    openid = models.CharField('用户标识', max_length=100, default='default')
    cookie = models.CharField('用户认证标识', max_length=100,default='')
    USER_RIGHTS = (
        ('0','超级管理员'),
        ('1','物业管理员'),
        ('2','普通用户'),
    )

    white_list = models.CharField(max_length=1000,verbose_name='电话白名单',default='')
    user_rights = models.CharField('用户权限',max_length=15, choices=USER_RIGHTS)
    #def available_device(self,request):
    #    for x in User.
    #    device.objects.filter(SYDW=self.objects.filter(id = request).values("upkeep"))

'''
@white_list 白名单池
@username 管理员名称
@white_list 物业管理员设置的申请者电话白名单，当微信小程序申请者的电话在白名单中时，会给小程序用户提供设备管理
'''
#class white_list(models.Model):
#    username = models.CharField(max_length=155,verbose_name='管理员名',default='')

'''
@device 存放设备基础信息
'''

class device(models.Model):
    SBSBM = models.CharField(max_length=255)
    SBZCDM = models.CharField(max_length=255)
    DTAZDZ = models.CharField(max_length=255)
    WBDWMC = models.CharField(max_length=255)
    SYDW = models.CharField(max_length=255)
    SYDWNBBH = models.CharField(max_length=255)
    DTJYJG = models.CharField(max_length=255)
    ZJJYRQ = models.CharField(max_length=255)
    ZJWBRQ = models.CharField(max_length=255)
    last_active_time = models.DateTimeField('最近操作时间', auto_now=True)
    freq = models.IntegerField('使用频率',default=0)

class Log(models.Model):
    owner = models.ForeignKey('User', on_delete = models.CASCADE, verbose_name = '日志所属人', default = None)
    create_time = models.DateTimeField('日志创建时间', auto_now_add = True)
    #日志类型
    TYPE = (
        ('0','添加设备'),
        ('1','删除设备'),
        ('2','修改设备'),
    )
    type = models.CharField('日志类型', max_length = 15, choices = TYPE)
    device = models.ForeignKey('device', on_delete = models.CASCADE, verbose_name = '操作设备', blank = True, null = True)
