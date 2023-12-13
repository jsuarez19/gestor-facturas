from .models import DocumentoVenta

def insert_initial_data():
    DocumentoVenta.objects.get_or_create(
        ID='113200',
        NUMERO_FACTURA='F003-21150',
        FECHA_EMISION='2023-12-01',
        MONEDA='Soles',
        MONTO=590.00,
        TIPO_CLIENTE='PRIVADO',
        NOMBRE_CLIENTE='LA POSITIVA SEGUROS Y REASEGUROS',
        CONDICION_PAGO='Credito a 90 dias',
        VENDEDOR='SEBASTIAN VIDALON RENTERIA',
        CANCELADO='N',
        ESTADO='ACT'
    )
    DocumentoVenta.objects.get_or_create(
        ID='113201',
        NUMERO_FACTURA='F003-21150',
        FECHA_EMISION='2023-12-01',
        MONEDA='Soles',
        MONTO=5000.00,
        TIPO_CLIENTE='PUBLICO',
        NOMBRE_CLIENTE='SEGURO SOCIAL DE SALUD - ESSALUD',
        CONDICION_PAGO='Credito a 90 dias',
        VENDEDOR='SEBASTIAN VIDALON RENTERIA',
        CANCELADO='S',
        ESTADO='ACT'
    )
    DocumentoVenta.objects.get_or_create(
        ID='113202',
        NUMERO_FACTURA='F003-21150',
        FECHA_EMISION='2023-12-01',
        MONEDA='Soles',
        MONTO=4000.00,
        TIPO_CLIENTE='PRIVADO',
        NOMBRE_CLIENTE='ADMINISTRADORA CLINICA RICADO PALMA S.A',
        CONDICION_PAGO='Credito a 90 dias',
        VENDEDOR='SEBASTIAN VIDALON RENTERIA',
        CANCELADO='N',
        ESTADO='ACT'
    )

    DocumentoVenta.objects.get_or_create(
        ID='113203',
        NUMERO_FACTURA='F003-21150',
        FECHA_EMISION='2023-12-01',
        MONEDA='Soles',
        MONTO=3000.00,
        TIPO_CLIENTE='PRIVADO',
        NOMBRE_CLIENTE='LA POSITIVA SEGUROS Y REASEGUROS',
        CONDICION_PAGO='Credito a 90 dias',
        VENDEDOR='SEBASTIAN VIDALON RENTERIA',
        CANCELADO='S',
        ESTADO='ANU'
    )
    DocumentoVenta.objects.get_or_create(
        ID='113204',
        NUMERO_FACTURA='F003-21150',
        FECHA_EMISION='2023-12-01',
        MONEDA='Soles',
        MONTO=2000.00,
        TIPO_CLIENTE='PRIVADO',
        NOMBRE_CLIENTE='LA POSITIVA SEGUROS Y REASEGUROS',
        CONDICION_PAGO='Credito a 90 dias',
        VENDEDOR='SEBASTIAN VIDALON RENTERIA',
        CANCELADO='N',
        ESTADO='NCA'
    )