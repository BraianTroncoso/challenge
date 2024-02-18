from django.contrib import admin
from django.urls import path
from user import views

urlpatterns = [
    path('user', views.userApi),
    path('user/<int:id>/', views.userApi),
    path('admin/', admin.site.urls),
]