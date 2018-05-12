from django.conf.urls import include, url
from . import views

urlpatterns = [

    url('^dateupdate/$', views.datein, name='datein'),
    url('^checkqr/$', views.checkqr, name='checkqr'),
    url('^test/$', views.test),
    url('^login/$',views.verify_user),

]
