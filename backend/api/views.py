from django.shortcuts import render
from django.http import JsonResponse

from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import TrainSerializer
from .models import Train

# Create your views here.

@api_view(['GET'])
def getTrains(request):
    trains=Train.objects.all().order_by('acPrice').values()
    serailizer=TrainSerializer(trains,many=True)
    return Response(serailizer.data)

@api_view(['GET'])
def getTrain(request,pk):
    train=Train.objects.get(trainNumber=pk)
    serailizer=TrainSerializer(train,many=False)
    return Response(serailizer.data)


