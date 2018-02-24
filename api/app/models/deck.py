from django.db import models


class Deck(models.Model):
    name = models.CharField(max_length=50)
    cards = models.ManyToManyField('Card')
    user = models.ForeignKey(
        'User',
        on_delete=models.CASCADE,
        null=True,
        blank=True
    )

    def __str__(self):
        return self.name

    def get_cards(self):
        return ", ".join([str(p) for p in self.cards.all()])