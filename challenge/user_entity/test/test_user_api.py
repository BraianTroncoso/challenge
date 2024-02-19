from django.test import TestCase
from django.urls import reverse
from rest_framework import status
from rest_framework.test import APIClient
from user_entity.models import UserEntity

class UserApiTestCase(TestCase):
    def setUp(self):
        self.client = APIClient()
        self.user_data = {
            "first_name": "John",
            "last_name": "Doe",
            "address": "123 Main St",
            "phone": "5551234567"
        }
        self.user = UserEntity.objects.create(**self.user_data)

    def test_get_users(self):
        url = reverse('user_list')
        response = self.client.get(url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_create_user(self):
        url = reverse('user_create')
        response = self.client.post(url, self.user_data, format='json')
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)

    def test_update_user(self):
        url = reverse('user_detail', kwargs={'id': self.user.id})
        updated_data = {
            "first_name": "Jane",
            "last_name": "Doe",
            "address": "456 Elm St",
            "phone": "5559876543"
        }
        response = self.client.put(url, updated_data, format='json')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.user.refresh_from_db()
        self.assertEqual(self.user.first_name, "Jane")

    def test_delete_user(self):
        url = reverse('user_detail', kwargs={'id': self.user.id})
        response = self.client.delete(url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_delete_nonexistent_user(self):
        non_existent_user_id = 99999  
        url = reverse('user_detail', kwargs={'id': non_existent_user_id})
        response = self.client.delete(url)
        self.assertEqual(response.status_code, status.HTTP_404_NOT_FOUND)

    def test_update_user_with_invalid_data(self):
        url = reverse('user_detail', kwargs={'id': self.user.id})
        invalid_data = {
            "first_name": "",  
            "last_name": "Doe",
            "address": "456 Elm St",
            "phone": "5559876543"
        }
        response = self.client.put(url, invalid_data, format='json')
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)

        
    # def test_get_specific_user(self):
    #     url = reverse('user_detail', kwargs={'id': self.user.id})
    #     response = self.client.get(url)
    #     self.assertEqual(response.status_code, status.HTTP_200_OK)
    #     user_data = response.json()  # Obtener el contenido de la respuesta como un diccionario
    #     self.assertEqual(user_data['first_name'], self.user_data['first_name'])

    # def test_get_nonexistent_user(self):
    #     non_existent_user_id = 99999  # Un ID que no existe en la base de datos
    #     url = reverse('user_detail', kwargs={'id': non_existent_user_id})
    #     response = self.client.get(url)
    #     self.assertEqual(response.status_code, status.HTTP_404_NOT_FOUND)