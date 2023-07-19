from django.db import models

# Create your models here.
class Train(models.Model):
    name=models.CharField(max_length=40)
    trainNumber=models.IntegerField(primary_key=True)
    depTime=models.DateTimeField()
    seatAvailable=models.IntegerField()
    acPrice=models.IntegerField()
    sleeperPrice=models.IntegerField()