from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.

class User(AbstractUser):
    upkeep = models.CharField(max_length=255,default='')
    device = models.CharField(max_length=255,verbose_name='物业',default='1')
    openid = models.CharField('用户标识', max_length=100, default='default')
    cookie = models.CharField('用户认证标识', max_length=100,default='')


    #def available_device(self,request):
    #    for x in User.
    #    device.objects.filter(SYDW=self.objects.filter(id = request).values("upkeep"))

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
