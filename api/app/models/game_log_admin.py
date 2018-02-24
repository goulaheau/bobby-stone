from django.contrib import admin


class GameLogAdmin(admin.ModelAdmin):
    list_display = [
        'id',
        'game',
        'winner',
        'loser',
        'round_number',
        'start_game',
        'end_game'
    ]
    list_filter = [
        'id',
        'game',
        'winner',
        'loser',
        'round_number',
        'start_game',
        'end_game'
    ]
    ordering = ['id']

