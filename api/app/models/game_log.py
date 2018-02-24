from django.db import models


class GameLog(models.Model):
    game = models.OneToOneField(
        'Game',
        on_delete=models.CASCADE,
    )
    start_game = models.DateTimeField()
    end_game = models.DateTimeField()
    round_number = models.IntegerField()
    winner = models.OneToOneField(
        'User',
        related_name='winner',
        on_delete=models.CASCADE
    )
    loser = models.OneToOneField(
        'User',
        related_name='loser',
        on_delete=models.CASCADE
    )

    def __str__(self):
        return self.winner

    class Meta:
        db_table = 'app_game_log'
