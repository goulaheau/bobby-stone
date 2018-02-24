from django.contrib import admin


class GameLogAdmin(admin.ModelAdmin):
    list_display = ['winner', 'loser', 'round_number', 'start_game', 'end_game']
    list_filter = ['winner', 'loser']
    ordering = ['winner']

