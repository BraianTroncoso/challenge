from django.db import models
from django.core.validators import MinLengthValidator, MaxLengthValidator, MinValueValidator, MaxValueValidator

class UserEntity(models.Model):
    first_name = models.CharField(max_length=255, validators=[MinLengthValidator(2), MaxLengthValidator(255)])
    last_name = models.CharField(max_length=255, validators=[MinLengthValidator(2), MaxLengthValidator(255)])
    address = models.CharField(max_length=255, validators=[MinLengthValidator(5), MaxLengthValidator(255)])
    phone = models.CharField(max_length=15, validators=[MinLengthValidator(10), MaxLengthValidator(15)])
