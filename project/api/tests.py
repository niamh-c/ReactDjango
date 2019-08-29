from django.test import TestCase
from api.models import Email

# Create your tests here.


class TestEmailModel(TestCase):
    def setUp(self):
        Email.objects.create(
            name="john",
            email="john@email.com",
            message="this is a message"
        )

    def test_store_message(self):
        message = Email.objects.get(name="john").message
        self.assertEqual(message, "this is a message")
