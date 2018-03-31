from django import forms
from django.utils.translation import ugettext_lazy as _
from wagtail.users.forms import UserEditForm, UserCreationForm

from users.models import User,device

class CustomUserEditForm(UserEditForm):
    device = forms.MultipleChoiceField(widget = forms.SelectMultiple,choices =((x.id,x.SBSBM)for x in device.objects.filter(id=44444)),required=True, label=_("设备"))
    upkeep = forms.CharField(required=True,label=_("物业名称"))

class CustomUserCreationForm(UserCreationForm):
    MY_CHOICES = (
            ('blue', 'Blu2'),
            ('green', 'Green'),
            ('black', 'Black'),
            )
    #device = forms.MultipleChoiceField(widget = forms.SelectMultiple,choices = ((x.id,x.SBSBM)for x in device.objects.filter(id=44444)),required=False, label=_("设备"))
    upkeep = forms.CharField(required=False,label=_("物业名称"))
