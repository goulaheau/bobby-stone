from django.db import models


class Rule(models.Model):
    name = models.CharField(max_length=50)
    players_health = models.IntegerField(default=30)
    cards_in_deck = models.IntegerField(default=30)
    cards_to_begin = models.IntegerField(default=5)
    cards_to_draw = models.IntegerField(default=1)

    def __str__(self):
        return self.name
