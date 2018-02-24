from django.contrib import admin

from app.models import *


admin.site.register(Deck, DeckAdmin)
admin.site.register(User, UserAdmin)
admin.site.register(Card, CardAdmin)
admin.site.register(CardEffect, CardEffectAdmin)
admin.site.register(GameLog, GameLogAdmin)
admin.site.register(Rule)
