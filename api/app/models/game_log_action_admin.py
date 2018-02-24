from django.contrib import admin


class GameLogActionAdmin(admin.ModelAdmin):
    list_display = [
        'id',
        'game_log',
        'action',
        'user',
        'turn',
        'date',
        'payload'
    ]
    list_filter = [
        'id',
        'game_log',
        'action',
        'user',
        'turn',
        'date',
        'payload'
    ]
    ordering = ['game_log', 'date']

