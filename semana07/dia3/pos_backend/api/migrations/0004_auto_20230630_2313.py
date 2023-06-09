# Generated by Django 3.2 on 2023-07-01 04:13

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0003_auto_20230630_1959'),
    ]

    operations = [
        migrations.AlterField(
            model_name='pedido',
            name='pedido_est',
            field=models.CharField(choices=[('solicitado', 'SOLICITADO'), ('entregado', 'entregado')], default='solicitado', max_length=100),
        ),
        migrations.AlterField(
            model_name='pedidoplato',
            name='plato_id',
            field=models.ForeignKey(db_column='plato_id', on_delete=django.db.models.deletion.RESTRICT, related_name='pedidosplatos', to='api.plato'),
        ),
    ]
