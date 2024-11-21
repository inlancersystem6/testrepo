from django.db import models

# Create your models here.
class UserRole(models.Model):

    role_id             =       models.AutoField(primary_key=True)
    role_name           =       models.CharField(max_length=50)
    role_status         =       models.BooleanField()
    role_created_at     =       models.DateTimeField(auto_created=True)
    role_is_delete      =       models.BooleanField(default=0)
    role_updated_at     =       models.DateTimeField(auto_now_add=True)

    class Meta:
        db_table = 'userrole'


class Module(models.Model):
    module_id = models.AutoField(primary_key=True)
    module_name = models.CharField(max_length=50)

    class Meta:
        db_table = "module"