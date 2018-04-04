from django.conf import settings
from django.conf.urls import include, url
from django.contrib import admin

from wagtail.admin import urls as wagtailadmin_urls
from wagtail.core import urls as wagtail_urls
from wagtail.documents import urls as wagtaildocs_urls
from users import views

from search import views as search_views

urlpatterns = [
    url(r'^upkeep/django-admin/', admin.site.urls),

    url(r'^upkeep/admin/', include(wagtailadmin_urls)),
    url(r'^upkeep/documents/', include(wagtaildocs_urls)),

    url(r'^upkeep/search/$', search_views.search, name='search'),

    # For anything not caught by a more specific rule above, hand over to
    # Wagtail's page serving mechanism. This should be the last pattern in
    # the list:
    url(r'upkeep/', include(wagtail_urls)),
    url(r'^upkeep/login/', views.verify_user),
    url('^upkeep/datain/$', views.datain, name='datain'),
    url('^upkeep/checkqr/$', views.checkqr, name='checkqr'),
    url('^upkeep/test/', views.test),
 
    # Alternatively, if you want Wagtail pages to be served from a subpath
    # of your site, rather than the site root:
    #    url(r'^pages/', include(wagtail_urls)),
]


if settings.DEBUG:
    from django.conf.urls.static import static
    from django.contrib.staticfiles.urls import staticfiles_urlpatterns

    # Serve static and media files from development server
    urlpatterns += staticfiles_urlpatterns()
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
