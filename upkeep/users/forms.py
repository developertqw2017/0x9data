from django import forms
from django.utils.translation import ugettext_lazy as _
from wagtail.users.forms import UserEditForm, UserCreationForm

from users.models import User

class CustomUserEditForm(UserEditForm):
    device = forms.ChoiceField(choices =['aa','bb'],required=True, label=_("设备"))


class CustomUserCreationForm(UserCreationForm):
    MY_CHOICES = (
            ('blue', 'Blu2'),
            ('green', 'Green'),
            ('black', 'Black'),
            )
    device = forms.MultipleChoiceField(widget = forms.SelectMultiple,choices = MY_CHOICES,required=False, label=_("设备"))
