from rest_framework import serializers
from user_entity.models import UserEntity

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserEntity
        fields = '__all__'