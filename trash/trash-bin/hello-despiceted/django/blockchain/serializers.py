from rest_framework import serializers
from .models import Blockchain
from .models import Blockchains
from .models import Blockchain_info
from .models import DjangoTest


# Blockchains Test
class BlockchainsSerializer(serializers.ModelSerializer): 
    class Meta: 
        model = Blockchains
        fields = ['id', 'name', 'email', 'Comment', 'bff', 'stars', 'age']
# Django Test
class DjangoTestSerializer(serializers.ModelSerializer): 
    class Meta: 
        model = DjangoTest
        fields = "__all__"
# Blockchain info
class Blockchain_infoSerializer(serializers.ModelSerializer): 
    class Meta: 
        model = Blockchain_info
        fields = "__all__"
# Blockchain
class BlockchainSerializer(serializers.ModelSerializer): 
    class Meta: 
        model = Blockchain
        fields = "__all__"


                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
