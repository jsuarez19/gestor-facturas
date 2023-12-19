from django.shortcuts import render

# Create your views here.
from rest_framework import viewsets
from rest_framework.response import Response
from .models import DocumentoVenta
from .serializers import DocumentoVentaSerializer

class DocumentoVentaViewSet(viewsets.ModelViewSet):
    queryset = DocumentoVenta.objects.all()
    serializer_class = DocumentoVentaSerializer
    http_method_names = ['get', 'post', 'head', 'put', 'patch']

def update(self, request, *args, **kwargs):
        partial = kwargs.pop('partial', False)
        instance = self.get_object()
        serializer = self.get_serializer(instance, data=request.data, partial=partial)
        serializer.is_valid(raise_exception=True)
        self.perform_update(serializer)

        return Response(serializer.data)

def list(self, request, *args, **kwargs):
        queryset = self.get_queryset()
        serializer = self.get_serializer(queryset, many=True)
        return Response(serializer.data)