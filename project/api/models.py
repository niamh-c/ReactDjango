from django.db import models

# Create your models here.


class Email(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    message = models.CharField(max_length=300)
    date_created = models.DateTimeField(auto_now_add=True)
