from django.shortcuts import render

# Create your views here.
from rest_framework import viewsets
from rest_framework.response import Response
from .models import DocumentoVenta
from .serializers import DocumentoVentaSerializer

class DocumentoVentaViewSet(viewsets.ModelViewSet):
    queryset = DocumentoVenta.objects.all()
    serializer_class = DocumentoVentaSerializer

def list(self, request, *args, **kwargs):
        queryset = self.get_queryset()
        serializer = self.get_serializer(queryset, many=True)
        return Response(serializer.data)