from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse
from user_entity.serializer import UserSerializer
from user_entity.models import UserEntity

@csrf_exempt
def studentApi(request,id=0):
    if request.method=='GET':
        user_entity = UserEntity.objects.all()
        user_serializer=UserSerializer(user_entity,many=True)
        return JsonResponse(user_serializer.data,safe=False)
    
    elif request.method=='POST':
        user_data=JSONParser().parse(request)
        user_serializer=UserSerializer(data=user_data)
        if user_serializer.is_valid():
            user_serializer.save()
            return JsonResponse("Successfully added New User",safe=False)
        return JsonResponse("Error adding a New User",safe=False)
    
    elif request.method=='PUT':
        user_data=JSONParser().parse(request)
        user_entity=UserEntity.objects.get(id=id)
        user_serializer=UserSerializer(user_entity,data=user_data)
        if user_serializer.is_valid():
            user_serializer.save()
            return JsonResponse("Successfully updated The User",safe=False)
        return JsonResponse("User update error")
    
    elif request.method=='DELETE':
        user_entity=UserEntity.objects.get(id=id)
        user_entity.delete()
        return JsonResponse("User successfully deleted",safe=False)