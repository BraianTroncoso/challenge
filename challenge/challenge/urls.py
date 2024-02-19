from django.contrib import admin
from django.urls import path
from django.conf.urls import url
from user_entity import views

urlpatterns = [
    url(r'^user$',views.userApi, name='user_list'),
    url(r'^user$',views.userApi, name='user_create'),
    url(r'^user/(?P<id>[0-9]+)$',views.userApi, name='user_detail'),
    path('admin/', admin.site.urls),
]