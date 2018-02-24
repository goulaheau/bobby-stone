from django.db import models


class GameLogAction(models.Model):
    game_log = models.ForeignKey('GameLog', on_delete=models.CASCADE)
    date = models.DateTimeField(null=False)
    turn = models.IntegerField(null=False)
    user = models.ForeignKey('User', on_delete=models.CASCADE)
    action = models.CharField(max_length=50, null=False)
    payload = models.TextField()

    class Meta:
        db_table = 'app_game_log_action'
