# Generated by Django 4.1.7 on 2023-03-12 14:59

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0007_alter_tasks_completed'),
    ]

    operations = [
        migrations.AlterField(
            model_name='tasks',
            name='completed',
            field=models.DateTimeField(blank=True, default=None, null=True),
        ),
    ]
