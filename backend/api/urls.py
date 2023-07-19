from django.urls import path
from . import views
urlpatterns = [
    path('',views.getTrains, name='get') ,
    path('train/trains/',views.getTrains,name="get-trains"),
    path('train/trains/<str:pk>/',views.getTrain,name="get-train")
]
