from rest_framework import serializers
from .models import DocumentoVenta

class DocumentoVentaSerializer(serializers.ModelSerializer):
    class Meta:
        model = DocumentoVenta
        fields = ['NUMERO_FACTURA', 'FECHA_EMISION', 'ESTATUS', 'PERSONAL_ASIGNADO', 'NOMBRE_CLIENTE', 'FECHA_ENTREGA', 'CANCELADO', 'ESTADO']