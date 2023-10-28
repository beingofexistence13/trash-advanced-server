from django.urls import path
from . import views





urlpatterns = [
    
    
  
    path('', views.BlockchainList.as_view()),
    path('c', views.BlockchainCreate.as_view()),
    path('gp', views.BlockchainListCreate.as_view()),
    path('r<int:pk>', views.BlockchainRetrieve.as_view()),
    path('u<int:pk>', views.BlockchainUpdate.as_view()),
    path('d<int:pk>', views.BlockchainDelete.as_view()),
    path('ru<int:pk>', views.BlockchainRetrieveUpdate.as_view()),
    path('rd<int:pk>', views.BlockchainRetrieveDestroy.as_view()),
    path('rud<int:pk>', views.BlockchainRetrieveUpdateDestroy.as_view()),

      
    
]
