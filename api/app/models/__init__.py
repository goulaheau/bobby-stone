from django.conf import settings
from django.db.models.signals import post_save
from django.dispatch import receiver
from rest_framework.authtoken.models import Token

from .card import Card
from .card_admin import CardAdmin
from .card_effect import CardEffect
from .card_effect_admin import CardEffectAdmin
from .deck import Deck
from .deck_admin import DeckAdmin
from .game import Game
from .game_log import GameLog
from .game_log_action import GameLogAction
from .game_log_admin import GameLogAdmin
from .card_value import CardValue
from .rule import Rule
from .user import User
from .user_admin import UserAdmin


# Triggered whenever a new user has been created and saved to the DB
@receiver(post_save, sender=settings.AUTH_USER_MODEL)
def create_auth_token(sender, instance=None, created=False, **kwargs):
    if created:
        Token.objects.create(user=instance)