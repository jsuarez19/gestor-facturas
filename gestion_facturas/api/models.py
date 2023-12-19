from django.db import models

class DocumentoVenta(models.Model):
    ID = models.AutoField(primary_key=True)
    NUMERO_FACTURA = models.CharField(max_length=20, null=True, editable=False)
    FECHA_EMISION = models.DateField(null=True, editable=False)
    MONEDA = models.CharField(max_length=60, null=True, editable=False)
    MONTO = models.DecimalField(max_digits=18, decimal_places=2, null=True, editable=False)
    TIPO_CLIENTE = models.CharField(max_length=60, null=True, editable=False)
    NOMBRE_CLIENTE = models.CharField(max_length=150, null=True, editable=False)
    CONDICION_PAGO = models.CharField(max_length=60, null=True, editable=False)
    VENDEDOR = models.CharField(max_length=60, null=True, editable=False)
    CANCELADO = models.CharField(max_length=1, null=True, editable=False)
    ESTADO = models.CharField(max_length=3, null=True, editable=False)
    # Modificables por el aplicativo
    ESTATUS = models.CharField(max_length=20, default="Emitido", editable=True)
    PERSONAL_ASIGNADO = models.CharField(max_length=80, null=True, editable=True)
    FECHA_ENTREGA = models.DateField(null=True, editable=True)
    COMENTARIOS = models.CharField(max_length=400, null=True, editable=True)
    DATOS_ADJUNTOS = models.BinaryField(null=True, editable=True)

    def __str__(self):
        return f"{self.NUMERO_FACTURA} - {self.NOMBRE_CLIENTE}"
