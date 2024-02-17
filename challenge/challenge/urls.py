from django.contrib import admin
from django.urls import path, include
from user import views


urlpatterns = [
    path('users/',views.userApi),
    path('users/<int:id>',views.userApi),
    path('admin/', admin.site.urls),
]