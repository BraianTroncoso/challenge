from django.db import models

# Create your models here.

class UserEntity(models.Model):
    first_name = models.CharField(max_length = 255)
    last_name = models.CharField(max_length = 255)
    address = models.CharField(max_length = 255)
    phone = models.IntegerField()
