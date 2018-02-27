from django.contrib import admin


class DeckAdmin(admin.ModelAdmin):
    list_display = [
        'name',
        'user',
        'get_cards'
    ]
    list_filter = [
        'name',
        'user'
    ]
    ordering = ['name']
