from django.urls import include, path
from rest_framework import routers
from .views import DocumentoVentaViewSet

router = routers.DefaultRouter()
router.register(r'documentos', DocumentoVentaViewSet)

urlpatterns = [
    # Otras rutas...
    path('api/', include(router.urls)),
]
