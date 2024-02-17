# from django.shortcuts import render

# # Create your views here.
# from rest_framework import status
# from rest_framework.views import APIView 
# from rest_framework.response import Response
# from user.models import UserModel
# from user.serializers import UserSerializer

# class UserApiView(APIView):
#     def get(self, request):
#         serializer = UserSerializer(UserModel.objects.all(), many=True)
#         return Response(status=status.HTTP_200_OK, data=serializer.data)
    

#     def post(self, request): 
#         #res = request.data.get('name')  
#         serializer = UserSerializer(data=request.data)
#         serializer.is_valid(raise_exception=True)
#         serializer.save()
#         return Response(status=status.HTTP_200_OK, data=serializer.data)

# class UserApiViewDetail(APIView):
#     def get_object(self, pk):
#         try:
#             return UserModel.objects.get(pk=pk)
#         except UserModel.DoesNotExist:
#             return None
#     def get(self, request, id):
#         user = self.get_object(id)
#         serializer = UserSerializer(user)  
#         return Response(status=status.HTTP_200_OK, data=serializer.data)
    
#     def put(self, request, id):
#         user = self.get_object(id)
#         if(user==None):
#             return Response(status=status.HTTP_200_OK, data={ 'error': 'Not found data'})
#         serializer = UserSerializer(user, data=request.data)
#         if serializer.is_valid():
#             serializer.save()
#             return Response(status=status.HTTP_200_OK, data=serializer.data) 
#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
#     def delete(self, request, id):
#         user = self.get_object(id)
#         user.delete()
#         response = { 'deleted': True }
#         return Response(status=status.HTTP_204_NO_CONTENT, data=response)

from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse
from user.serializers import UserSerializer
from user.models import UserModel

@csrf_exempt
def userApi(request,id=0):
    if request.method=='GET':
        user = UserModel.objects.all()
        user_serializer=UserSerializer(user,many=True)
        return JsonResponse(user_serializer.data,safe=False)
    elif request.method=='POST':
        user_data=JSONParser().parse(request)
        user_serializer=UserSerializer(data=user_data)
        if user_serializer.is_valid():
            user_serializer.save()
            return JsonResponse("Added Successfully",safe=False)
        return JsonResponse("Failed to Add",safe=False)
    elif request.method=='PUT':
        user_data=JSONParser().parse(request)
        user=UserModel.objects.get(id=id)
        user_serializer=UserSerializer(user,data=user_data)
        if user_serializer.is_valid():
            user_serializer.save()
            return JsonResponse("Updated Successfully",safe=False)
        return JsonResponse("Failed to Update")
    elif request.method=='DELETE':
        user=UserModel.objects.get(id=id)
        user.delete()
        return JsonResponse("Deleted Successfully",safe=False)