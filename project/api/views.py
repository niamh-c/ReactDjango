from api.models import Email
from api.serializers import EmailSerializer
from rest_framework import generics

# Create your views here.


class EmailListCreate(generics.ListCreateAPIView):
    queryset = Email.objects.all()
    serializer_class = EmailSerializer
