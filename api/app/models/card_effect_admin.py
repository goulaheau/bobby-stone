from django.contrib import admin


class CardEffectAdmin(admin.ModelAdmin):
    list_display = [
        'name',
        'player_affected',
        'type',
        'quantity'
    ]
    list_filter = [
        'name',
        'player_affected',
        'type',
        'quantity'
    ]
    ordering = ['name']
