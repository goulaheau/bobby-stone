from django.db import models


class Card(models.Model):
    name = models.CharField(max_length=50)
    type = models.CharField(
        choices=[
            ['monster', 'Monstre'],
            ['spell', 'Sort'],
        ],
        max_length=7,
        default='monster',
    )
    cost = models.IntegerField(default=1)
    health = models.IntegerField(null=True)
    strength = models.IntegerField(null=True)
    effect = models.ForeignKey(
        'CardEffect',
        on_delete=models.CASCADE,
        null=True,
        blank=True,
    )
    picture = models.ImageField(
        upload_to='card_images',
        default='media/default.png',
    )

    def __str__(self):
        return self.name
