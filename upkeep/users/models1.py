from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.

class User(AbstractUser):
    upkeep = models.CharField(max_length=255)
    device = models.CharField(verbose_name='物业',max_length=255)

class device(models.Model):
    SBSBM = models.CharField(max_length=255,default='')
    SBZCDM = models.CharField(max_length=255,default='')
    DTAZDZ = models.CharField(max_length=255,default='')
    WBDWMC = models.CharField(max_length=255,default='')
    SYDW = models.CharField(max_length=255,default='')
    SYDWNBBH = models.CharField(max_length=255,default='')
    DTJYJG = models.CharField(max_length=255,default='')
    ZJJYRQ = models.CharField(max_length=255,default='')
    ZJWBRQ = models.CharField(max_length=255,default='')
