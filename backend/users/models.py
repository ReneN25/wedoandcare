from django.db import models

class Users(models.Model):  
    id = models.AutoField(primary_key=True)
    name = models.TextField()
    last_name = models.TextField()
    email = models.TextField(unique=True)
    date_of_birth = models.DateField()
    school = models.TextField()

    class Meta:
        db_table = "users"  