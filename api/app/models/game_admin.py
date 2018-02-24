from django.contrib import admin


class GameAdmin(admin.ModelAdmin):
    list_display = [
        'id',
        'rule',
        'owner',
        'opponent',
        'owner_deck',
        'opponent_deck',
        'turn',
        'player_turn',
        'owner_mana',
        'opponent_mana',
        'owner_health',
        'opponent_health'
    ]
    list_filter = [
        'id',
        'rule',
        'owner',
        'opponent',
        'owner_deck',
        'opponent_deck',
        'turn',
        'player_turn',
        'owner_mana',
        'opponent_mana',
        'owner_health',
        'opponent_health'
    ]
    ordering = ['id']

