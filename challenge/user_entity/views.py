from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse
from django.core.exceptions import ObjectDoesNotExist
from user_entity.serializer import UserSerializer
from user_entity.models import UserEntity

@csrf_exempt
def userApi(request, id=0):
    try:
        if request.method == 'GET':
            user_entity = UserEntity.objects.all()
            user_serializer = UserSerializer(user_entity, many=True)
            return JsonResponse(user_serializer.data, safe=False)

        elif request.method == 'POST':
            user_data = JSONParser().parse(request)
            user_serializer = UserSerializer(data=user_data)
            if user_serializer.is_valid():
                user_serializer.save()
                return JsonResponse({"message": "Successfully added New User"}, status=201)
            return JsonResponse({"error": "Error adding a New User"}, status=400)

        elif request.method == 'PUT':
            user_data = JSONParser().parse(request)
            try:
                user_entity = UserEntity.objects.get(id=id)
                user_serializer = UserSerializer(user_entity, data=user_data)
                if user_serializer.is_valid():
                    user_serializer.save()
                    return JsonResponse({"message": "Successfully updated The User"})
                return JsonResponse({"error": "User update error"}, status=400)
            except ObjectDoesNotExist:
                return JsonResponse({"error": "User not found"}, status=404)

        elif request.method == 'DELETE':
            try:
                user_entity = UserEntity.objects.get(id=id)
                user_entity.delete()
                return JsonResponse({"message": "User successfully deleted"})
            except ObjectDoesNotExist:
                return JsonResponse({"error": "User not found"}, status=404)

    except Exception as e:
        return JsonResponse({"error": str(e)}, status=500)
