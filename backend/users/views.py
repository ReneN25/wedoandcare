from django.shortcuts import render
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.contrib.auth.hashers import make_password
from .models import Users
from datetime import datetime

# Create your views here.

@api_view(['POST'])
def register_user(request):
    try:
        # Extract data from request
        data = request.data
        
        # Create new user
        user = Users.objects.create(
            name=data['name'],
            email=data['email'],
            # Add other required fields with default values
            last_name="",  # You might want to split the name field
            date_of_birth=datetime.now().date(),  # You might want to add a date picker in the form
            school=""  # You might want to add this field to the form
        )
        
        return Response({
            'message': 'User registered successfully',
            'user_id': user.id
        }, status=status.HTTP_201_CREATED)
        
    except Exception as e:
        return Response({
            'message': str(e)
        }, status=status.HTTP_400_BAD_REQUEST)
