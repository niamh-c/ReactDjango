from django.urls import path
from . import views

urlpatterns = [
    path("api/api/", views.EmailListCreate.as_view()),
]
