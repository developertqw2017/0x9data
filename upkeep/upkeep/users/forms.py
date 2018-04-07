from django import forms
from django.utils.translation import ugettext_lazy as _
from wagtail.users.forms import UserEditForm, UserCreationForm
from users.models import User,device

import json
import string
#pickle模块是为了将数据库中序列化过的数据反序列化后使用

class CustomUserEditForm(UserEditForm):
    def __init__(self,*args, **kwargs):
        username = kwargs['instance']
        upkeep = User.objects.get(username = username)
        super().__init__(*args, **kwargs)
        self.fields['username'].initial = ''
        self.fields['device'].choices =((x.id,x.SYDWNBBH)for x in device.objects.filter(SYDW = upkeep.upkeep))
        devices = list(eval(upkeep.device))
        rets = []
        
        for x in devices:
            res = device.objects.get(id = int(x))
            rets.append((res.id,res.SYDWNBBH))
        self.fields['avai_device'].choices = rets
        #self.fields['avai_device'].choices =
    #class Meta:
    #    model = User
    #    fields = ['email','is_superuser','device','upkeep','groups','first_name','last_name','is_active','username','password1','password2']
    #device = forms.MultipleChoiceField(widget = forms.SelectMultiple,choices =((x.id,x.SBSBM)for x in device.objects.filter(SYDW = '河北润龙物业服务有限公司')),required=False, label=_("设备"))
    
    avai_device = forms.MultipleChoiceField(widget = forms.SelectMultiple,choices =[],required=False, label=_("管理中的设备"))
    device = forms.MultipleChoiceField(widget = forms.SelectMultiple,choices =[],required=False, label=_("可选的设备"))
    upkeep = forms.CharField(required=True,label=_('物业名称'))
    def clean_username(self):
        username = self.cleaned_data['username']
        return username


class test(forms.ModelForm):
    def __init__(self,*args, **kwargs):
        super().__init__(*args, **kwargs)
        cleaned_data = super(forms.ModelForm, self).clean()
        username1 = cleaned_data.get("username")
        upkeep = forms.CharField(required = False, label=_("ffff"))

class CustomUserCreationForm(UserCreationForm):
    MY_CHOICES = (
            ('blue', 'Blu2'),
            ('green', 'Green'),
            ('black', 'Black'),
            )
    upkeep = forms.CharField(required = False,label=_("物业名称"))
    device = forms.MultipleChoiceField(widget = forms.SelectMultiple,choices = MY_CHOICES,required=False, label=_("设备"))
