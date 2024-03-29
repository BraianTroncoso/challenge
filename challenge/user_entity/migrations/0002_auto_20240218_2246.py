# Generated by Django 3.2 on 2024-02-18 22:46

import django.core.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('user_entity', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='userentity',
            name='address',
            field=models.CharField(max_length=255, validators=[django.core.validators.MinLengthValidator(5), django.core.validators.MaxLengthValidator(255)]),
        ),
        migrations.AlterField(
            model_name='userentity',
            name='first_name',
            field=models.CharField(max_length=255, validators=[django.core.validators.MinLengthValidator(2), django.core.validators.MaxLengthValidator(255)]),
        ),
        migrations.AlterField(
            model_name='userentity',
            name='last_name',
            field=models.CharField(max_length=255, validators=[django.core.validators.MinLengthValidator(2), django.core.validators.MaxLengthValidator(255)]),
        ),
        migrations.AlterField(
            model_name='userentity',
            name='phone',
            field=models.CharField(max_length=15, validators=[django.core.validators.MinLengthValidator(10), django.core.validators.MaxLengthValidator(15)]),
        ),
    ]
