from django.db import models


class Game(models.Model):
    rule = models.ForeignKey(
        'Rule',
        on_delete=models.CASCADE,
        default=1
    )
    owner = models.ForeignKey(
        'User',
        related_name='owner',
        on_delete=models.CASCADE,
    )
    opponent = models.ForeignKey(
        'User',
        related_name='opponent',
        on_delete=models.CASCADE,
        null=True,
    )
    owner_deck = models.ForeignKey(
        'Deck',
        related_name='owner_deck',
        on_delete=models.CASCADE,
    )
    opponent_deck = models.ForeignKey(
        'Deck',
        related_name='opponent_deck',
        on_delete=models.CASCADE,
        null=True,
    )
    turn = models.IntegerField(null=True)
    player_turn = models.ForeignKey(
        'User',
        related_name='player_turn',
        on_delete=models.CASCADE,
        null=True
    )

    owner_mana = models.IntegerField(null=True)
    opponent_mana = models.IntegerField(null=True)

    owner_health = models.IntegerField(null=True)
    opponent_health = models.IntegerField(null=True)

    owner_deck_cards = models.ManyToManyField(
        'Card',
        related_name='owner_deck_cards',
        blank=True,
    )
    opponent_deck_cards = models.ManyToManyField(
        'Card',
        related_name='opponent_deck_cards',
        blank=True,
    )
    owner_hand_cards = models.ManyToManyField(
        'Card',
        related_name='owner_hand_cards',
        blank=True,
    )
    opponent_hand_cards = models.ManyToManyField(
        'Card',
        related_name='opponent_hand_cards',
        blank=True,
    )
    owner_board_card_values = models.ManyToManyField(
        'CardValue',
        related_name='owner_board_card_values',
        blank=True,
    )
    opponent_board_card_values = models.ManyToManyField(
        'CardValue',
        related_name='opponent_board_card_values',
        blank=True,
    )
    owner_graveyard_cards = models.ManyToManyField(
        'Card',
        related_name='owner_graveyard_cards',
        blank=True,
    )
    opponent_graveyard_cards = models.ManyToManyField(
        'Card',
        related_name='opponent_graveyard_cards',
        blank=True,
    )

    def __str__(self):
        return self.id

