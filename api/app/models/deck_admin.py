from django.contrib import admin


class DeckAdmin(admin.ModelAdmin):
    list_display = ('name', 'get_cards')
    list_filter = ['name']
    ordering = ['name']

    def author_first_name(self, obj):
        return obj.author.first_name
