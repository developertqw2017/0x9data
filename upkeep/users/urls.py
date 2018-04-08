from django.conf.urls import include, url
from . import views

urlpatterns = [

    url('^datain/$', views.datain, name='datain'),
    url('^checkqr/$', views.checkqr, name='checkqr'),
    url('^test/$', views.test),
    url('^login/$',views.verify_user),

]
