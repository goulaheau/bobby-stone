from django.db import models


class CardEffect(models.Model):
    name = models.CharField(max_length=50)
    description = models.TextField(default='')
    player_affected = models.CharField(
        choices=[
            ['self', 'Soi-même'],
            ['opponent', 'Adversaire']
        ],
        max_length=8,
        default='opponent',
    )
    type = models.CharField(
        choices=[
            ['damage', 'Dégât'],
            ['heal', 'Soin']
        ],
        max_length=6,
        default='damage',
    )
    quantity = models.IntegerField(default=1)

    def __str__(self):
        return self.name

    class Meta:
        db_table = 'app_card_effect'
