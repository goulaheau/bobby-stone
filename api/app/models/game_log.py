from django.utils import timezone

from django.db import models


class GameLog(models.Model):
    game = models.OneToOneField(
        'Game',
        on_delete=models.CASCADE
    )
    start_game = models.DateTimeField(default=timezone.now)
    end_game = models.DateTimeField(default=timezone.now)
    round_number = models.IntegerField()
    winner = models.ForeignKey(
        'User',
        related_name='winner',
        on_delete=models.CASCADE,
        null=True
    )
    loser = models.ForeignKey(
        'User',
        related_name='loser',
        on_delete=models.CASCADE,
        null=True
    )

    def __str__(self):
        return str(self.id)

    class Meta:
        db_table = 'app_game_log'
