# Generated by Django 2.0.3 on 2018-03-30 04:58

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0003_device'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='device',
            name='last_date_mainten',
        ),
    ]