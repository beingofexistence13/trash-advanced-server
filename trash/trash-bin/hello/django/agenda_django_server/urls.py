from django.contrib import admin
from django.urls import include, path
from django.views.decorators.csrf import csrf_exempt
from graphene_django.views import GraphQLView
from django.conf import settings
from django.conf.urls.static import static





urlpatterns = [
    
    path('', admin.site.urls),
    path('blockchain', include('blockchain.urls')),
    path("graphql", csrf_exempt(GraphQLView.as_view(graphiql=True))),
    

]




if settings.DEBUG == True:
    print("Debug True")

if settings.DEBUG == False:
    print("Debug False")
    urlpatterns += static(settings.MEDIA_URL,document_root=settings.MEDIA_ROOT)
 
