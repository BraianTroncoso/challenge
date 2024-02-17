from django.contrib import admin
from django.urls import path
from django.urls import path, include
from user.urls import urlpatterns_users

urlpatterns = [
    path('admin/', admin.site.urls),
        path('api/', include(urlpatterns_users))
]
