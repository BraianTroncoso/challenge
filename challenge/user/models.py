from django.db import models

class UserModel(models.Model):
    name = models.CharField(max_length=255)
    address = models.TextField()
    fee = models.BigIntegerField()
    # created_at = models.DateTimeField(auto_now_add=True)
    # updated_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        db_table = "user"
        # ordering = ['-created_at']
