from django.db import models

# Create your models here.

class upkeep_user(models.Model):
    uid = models.CharField(max_length=200)
    upk_id = models.IntegerField(default=0)
    phone = models.IntegerField(default=0)
    uname = models.CharField(max_length=100)
    permission = models.IntegerField(default=0)

class device_Manageable(models.Model):
    uid = models.CharField(max_length=200)
    sbsbm_manageable = models.IntegerField(default=0)

class device_upkeep(models.Model):
    name_up = models.CharField(max_length=200)
    sbsbm_up = models.IntegerField(default=0)
