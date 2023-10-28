import dj_database_url
# Blockchains test
@admin.register(Blockchains)
class BlockchainsAdmin(admin.ModelAdmin): 
    list_display = ['id', 'name', 'email', 'Comment', 'bff', 'stars', 'age']
# Django test
@admin.register(DjangoTest)
class DjangoTestAdmin(admin.ModelAdmin): 
    list_display = [
    "binary",
    "boolean",
    "char",
    "date",
    "dateTime",
    "decimal",
    "duration",
    "email",
    "file",
    "float",
    "integer",
    "genericIPAddress",
    "positiveInteger",
    "positiveSmallInteger",
    "slug",
    "smallInteger",
    "text",
    "time",
    "uRL",
    "uUID"
  ]

# Blockchains Info
@admin.register(Blockchain_info)
class Blockchain_InfoAdmin(admin.ModelAdmin): 
   list_display = [
    
        "bigInteger",
        "binary",
        "boolean",
        "char",
        "date",
        "dateTime",
        "decimal",
        "duration",
        "email",
        "file",
        "float",
        "integer",
        "images",
        "genericIPAddress",
        "positiveInteger",
        "positiveSmallInteger",
        "slug",
        "smallInteger",
        "text",
        "time",
        "uRL",
        "uUID"        
        
    ]
