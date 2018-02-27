from django.contrib import admin


class RuleAdmin(admin.ModelAdmin):
    list_display = [
        'id',
        'name',
        'players_health',
        'cards_in_deck',
        'cards_to_begin',
        'cards_to_draw'
    ]
    list_filter = [
        'id',
        'name',
        'players_health',
        'cards_in_deck',
        'cards_to_begin',
        'cards_to_draw'
    ]
    ordering = ['id']
