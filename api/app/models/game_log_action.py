from django.db import models
from django.utils import timezone


class GameLogAction(models.Model):
    game_log = models.ForeignKey('GameLog', on_delete=models.CASCADE)
    date = models.DateTimeField(default=timezone.now)
    turn = models.IntegerField(null=False)
    user = models.ForeignKey('User', on_delete=models.CASCADE)
    action = models.CharField(max_length=50, null=False)
    payload = models.TextField()

    def __str__(self):
        return str(self.id)

    class Meta:
        db_table = 'app_game_log_action'
