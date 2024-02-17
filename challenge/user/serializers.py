from rest_framework.serializers import ModelSerializer
from user.models import UserModel


class UserSerializer(ModelSerializer):
    class Meta:
        model = UserModel
        # fields = ['id', 'name', 'address', 'fee']
        fields = '__all__'