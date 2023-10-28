from django.contrib import admin
from .models import Blockchain
from .models import Blockchains
from .models import DjangoTest
from .models import Blockchain_info


# Blockchain
@admin.register(Blockchain)
class BlockchainAdmin(admin.ModelAdmin): 
  list_display = [
        
        "like",
        "dislike",
        "icon",
        "name",
        "shortName",
        "email",
        "website",
        "chain",
        "chainId",
        "networkId",
        "rpc",
        "facets",
        "nativeCurrency",
        "infoURL",
        "slip44",
        "share",
        "ens",
        "exprolers",
        "hello",
        "youtube",
        "facebook",
        "snapchat",
        "discord",
        "tiktok",
        "thanksTo",
        "otherProduct",
        "supportedPlatform",
        "alert",
        "report",
        "info",
        "experience",
        "helpSupport",
        "smartContract",
        "smartContractGraph",
        "comment",
        "star",
        
        
    ]







                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
