# Generated by Django 2.0.3 on 2018-03-31 02:13

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0006_device'),
    ]

    operations = [
        migrations.AlterField(
            model_name='device',
            name='DTAZDZ',
            field=models.CharField(default='', max_length=255),
        ),
        migrations.AlterField(
            model_name='device',
            name='DTJYJG',
            field=models.CharField(default='', max_length=255),
        ),
        migrations.AlterField(
            model_name='device',
            name='SBSBM',
            field=models.CharField(default='', max_length=255),
        ),
        migrations.AlterField(
            model_name='device',
            name='SBZCDM',
            field=models.CharField(default='', max_length=255),
        ),
        migrations.AlterField(
            model_name='device',
            name='SYDW',
            field=models.CharField(default='', max_length=255),
        ),
        migrations.AlterField(
            model_name='device',
            name='SYDWNBBH',
            field=models.CharField(default='', max_length=255),
        ),
        migrations.AlterField(
            model_name='device',
            name='WBDWMC',
            field=models.CharField(default='', max_length=255),
        ),
        migrations.AlterField(
            model_name='device',
            name='ZJJYRQ',
            field=models.CharField(default='', max_length=255),
        ),
        migrations.AlterField(
            model_name='device',
            name='ZJWBRQ',
            field=models.CharField(default='', max_length=255),
        ),
    ]