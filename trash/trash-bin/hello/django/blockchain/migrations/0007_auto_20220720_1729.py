# Generated by Django 3.2.9 on 2022-07-20 11:29

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('blockchain', '0006_auto_20220719_2100'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='blockchain',
            name='standard',
        ),
        migrations.AddField(
            model_name='blockchain',
            name='share',
            field=models.TextField(blank=True, null=True),
        ),
    ]