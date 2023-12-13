# api/management/commands/load_initial_data.py
from django.core.management.base import BaseCommand
from api.data_insert import insert_initial_data

class Command(BaseCommand):
    help = 'Load initial data into the database'

    def handle(self, *args, **options):
        insert_initial_data()
        self.stdout.write(self.style.SUCCESS('Successfully loaded initial data'))
