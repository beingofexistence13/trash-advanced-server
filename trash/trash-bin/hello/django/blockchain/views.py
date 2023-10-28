from django.shortcuts import render
from django.http import HttpResponse
from rest_framework.generics import ListAPIView, CreateAPIView, RetrieveAPIView, UpdateAPIView, DestroyAPIView, ListCreateAPIView, RetrieveUpdateAPIView, RetrieveDestroyAPIView, RetrieveUpdateDestroyAPIView 
from .serializers import BlockchainSerializer
from .serializers import BlockchainsSerializer
from .serializers import Blockchain_infoSerializer
from .serializers import DjangoTestSerializer
from .models import Blockchain
from .models import Blockchains
from .models import Blockchain_info
from .models import DjangoTest


# //////////////////////////////// Blockchains //////////////////////////////
# ListAPIView
class BlockchainsList(ListAPIView):
    queryset = Blockchains.objects.all()
    serializer_class = BlockchainSerializer
  
# Postdata    
class BlockchainsCreate(CreateAPIView):
    queryset = Blockchains.objects.all()
    serializer_class = BlockchainSerializer
# RetrieveAPIView    
class BlockchainsRetrieve(RetrieveAPIView):
    queryset = Blockchains.objects.all()
    serializer_class = BlockchainSerializer
# UpdateAPIView    
class BlockchainsUpdate(UpdateAPIView):
    queryset = Blockchains.objects.all()
    serializer_class = BlockchainSerializer
# DestroyAPIView    
class BlockchainsDelete(DestroyAPIView):
    queryset = Blockchains.objects.all()
    serializer_class = BlockchainSerializer
# GetAndPost
class BlockchainsListCreate(ListCreateAPIView):
    queryset = Blockchains.objects.all()
    serializer_class = BlockchainSerializer
# RetrieveUpdateAPIView    
class BlockchainsRetrieveUpdate(RetrieveUpdateAPIView):
    queryset = Blockchains.objects.all()
    serializer_class = BlockchainSerializer
# RetrieveDestroyAPIView
class BlockchainsRetrieveDestroy(RetrieveDestroyAPIView):
    queryset = Blockchains.objects.all()
    serializer_class = BlockchainSerializer
# RetrieveUpdateDestroyAPIView
class BlockchainsRetrieveUpdateDestroy(RetrieveUpdateDestroyAPIView):
    queryset = Blockchains.objects.all()
    serializer_class = BlockchainSerializer
# //////////////////////////////// DjangoTest //////////////////////////////
# ListAPIView
class DjangoTestList(ListAPIView):
    queryset = DjangoTest.objects.all()
    serializer_class = DjangoTestSerializer
# Postdata    
class DjangoTestCreate(CreateAPIView):
    queryset = DjangoTest.objects.all()
    serializer_class = DjangoTestSerializer
# RetrieveAPIView    
class DjangoTestRetrieve(RetrieveAPIView):
    queryset = DjangoTest.objects.all()
    serializer_class = DjangoTestSerializer
# UpdateAPIView    
class DjangoTestUpdate(UpdateAPIView):
    queryset = DjangoTest.objects.all()
    serializer_class = DjangoTestSerializer
# DestroyAPIView    
class DjangoTestDelete(DestroyAPIView):
    queryset = DjangoTest.objects.all()
    serializer_class = DjangoTestSerializer
# GetAndPost
class DjangoTestListCreate(ListCreateAPIView):
    queryset = DjangoTest.objects.all()
    serializer_class = DjangoTestSerializer
# RetrieveUpdateAPIView    
class DjangoTestRetrieveUpdate(RetrieveUpdateAPIView):
    queryset = DjangoTest.objects.all()
    serializer_class = DjangoTestSerializer
# RetrieveDestroyAPIView
class DjangoTestRetrieveDestroy(RetrieveDestroyAPIView):
    queryset = DjangoTest.objects.all()
    serializer_class = DjangoTestSerializer
# RetrieveUpdateDestroyAPIView
class DjangoTestRetrieveUpdateDestroy(RetrieveUpdateDestroyAPIView):
    queryset = DjangoTest.objects.all()
    serializer_class = DjangoTestSerializer
# //////////////////////////////// Blockchain Info //////////////////////////////
# ListAPIView
class Blockchain_infoList(ListAPIView):
    queryset = Blockchain_info.objects.all()
    serializer_class = Blockchain_infoSerializer
# Postdata    
class Blockchain_infoCreate(CreateAPIView):
    queryset = Blockchain_info.objects.all()
    serializer_class = Blockchain_infoSerializer
# RetrieveAPIView    
class Blockchain_infoRetrieve(RetrieveAPIView):
    queryset = Blockchain_info.objects.all()
    serializer_class = Blockchain_infoSerializer
# UpdateAPIView    
class Blockchain_infoUpdate(UpdateAPIView):
    queryset = Blockchain_info.objects.all()
    serializer_class = Blockchain_infoSerializer
# DestroyAPIView    
class Blockchain_infoDelete(DestroyAPIView):
    queryset = Blockchain_info.objects.all()
    serializer_class = Blockchain_infoSerializer
# GetAndPost
class Blockchain_infoListCreate(ListCreateAPIView):
    queryset = Blockchain_info.objects.all()
    serializer_class = Blockchain_infoSerializer
# RetrieveUpdateAPIView    
class Blockchain_infoRetrieveUpdate(RetrieveUpdateAPIView):
    queryset = Blockchain_info.objects.all()
    serializer_class = Blockchain_infoSerializer
# RetrieveDestroyAPIView
class Blockchain_infoRetrieveDestroy(RetrieveDestroyAPIView):
    queryset = Blockchain_info.objects.all()
    serializer_class = Blockchain_infoSerializer
# RetrieveUpdateDestroyAPIView
class Blockchain_infoRetrieveUpdateDestroy(RetrieveUpdateDestroyAPIView):
    queryset = Blockchain_info.objects.all()
    serializer_class = Blockchain_infoSerializer
# //////////////////////////////// Blockchain //////////////////////////////
# ListAPIView
class BlockchainList(ListAPIView):
    queryset = Blockchain.objects.all()
    serializer_class = BlockchainSerializer
# Postdata    
class BlockchainCreate(CreateAPIView):
    queryset = Blockchain.objects.all()
    serializer_class = BlockchainSerializer
# RetrieveAPIView    
class BlockchainRetrieve(RetrieveAPIView):
    queryset = Blockchain.objects.all()
    serializer_class = BlockchainSerializer
# UpdateAPIView    
class BlockchainUpdate(UpdateAPIView):
    queryset = Blockchain.objects.all()
    serializer_class = BlockchainSerializer
# DestroyAPIView    
class BlockchainDelete(DestroyAPIView):
    queryset = Blockchain.objects.all()
    serializer_class = BlockchainSerializer
# GetAndPost
class BlockchainListCreate(ListCreateAPIView):
    queryset = Blockchain.objects.all()
    serializer_class = BlockchainSerializer
# RetrieveUpdateAPIView    
class BlockchainRetrieveUpdate(RetrieveUpdateAPIView):
    queryset = Blockchain.objects.all()
    serializer_class = BlockchainSerializer
# RetrieveDestroyAPIView
class BlockchainRetrieveDestroy(RetrieveDestroyAPIView):
    queryset = Blockchain.objects.all()
    serializer_class = BlockchainSerializer
# RetrieveUpdateDestroyAPIView
class BlockchainRetrieveUpdateDestroy(RetrieveUpdateDestroyAPIView):
    queryset = Blockchain.objects.all()
    serializer_class = BlockchainSerializer
    
    





    
# Index and Add.
def index(request):
    return render(request,"index.html")     
def add(request):
    return HttpResponse("Add")
    
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
