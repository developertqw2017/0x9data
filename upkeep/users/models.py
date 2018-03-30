from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.

class User(AbstractUser):

    device_list = (
            (0, u'全国'),
            (1, u'省、直辖市'),
            (2, u'市、直辖市区'),
            (3, u'区、县等'),
            )
    device = models.IntegerField(choices=device_list,verbose_name='物业',default='1')

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
