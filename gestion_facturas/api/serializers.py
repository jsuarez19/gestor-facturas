from rest_framework import serializers
from .models import DocumentoVenta

class DocumentoVentaSerializer(serializers.ModelSerializer):
    class Meta:
        model = DocumentoVenta
        fields = '__all__'
