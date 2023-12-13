from django.db import models

class DocumentoVenta(models.Model):
    ID = models.AutoField(primary_key=True)
    NUMERO_FACTURA = models.CharField(max_length=20, null=True)
    FECHA_EMISION = models.DateField(null=True)
    MONEDA = models.CharField(max_length=60, null=True)
    MONTO = models.DecimalField(max_digits=18, decimal_places=2, null=True)
    TIPO_CLIENTE = models.CharField(max_length=60, null=True)
    NOMBRE_CLIENTE = models.CharField(max_length=150, null=true)
    CONDICION_PAGO = models.CharField(max_length=60, null=True)
    VENDEDOR = models.CharField(max_length=60, null=True)
    CANCELADO = models.CharField(max_length=1, null=True)
    ESTADO = models.CharField(max_length=3, null=True)
    ESTATUS = models.CharField(max_length=20, default="Emitido")
    PERSONAL_ASIGNADO = models.CharField(max_length=80, null=True)
    FECHA_ENTREGA = models.DateField(null=True)
    COMENTARIOS = models.CharField(max_length=400, null=True)
    DATOS_ADJUNTOS = models.BinaryField(null=True)

    def __str__(self):
        return f"{self.NUMERO_FACTURA} - {self.NOMBRE_CLIENTE}"

# Create your models here.
