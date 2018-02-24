from django.contrib import admin


class CardAdmin(admin.ModelAdmin):
    list_display = [
        'name',
        'type',
        'cost',
        'health',
        'strength',
    ]
    list_filter = [
        'name',
        'type',
        'cost',
        'health',
        'strength',
    ]
    ordering = ['name']
