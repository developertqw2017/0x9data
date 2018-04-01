from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.

class User(AbstractUser):
    upkeep = models.CharField(max_length=255,default='')
    device = models.CharField(max_length=255,verbose_name='物业',default='1')
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
