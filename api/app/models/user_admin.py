from django.contrib import admin


class UserAdmin(admin.ModelAdmin):
    list_display = ['username', 'id', 'last_login', 'is_staff', 'is_active', 'is_superuser']
    list_filter = ['is_superuser', 'is_active', 'is_staff']
    ordering = ['username']

    # # Personnalisation des champs du formulaire
    # fieldsets = (
    #     ('USER', {
    #         'description': 'Propriétés du user',
    #         'fields': ['username', 'password', 'email', 'last_login',
    #                    'date_joined', 'is_superuser', 'is_staff', 'is_active']}
    #      ),
    #     ('PLAYER', {
    #         'description': 'Deck(s) du joueur',
    #         'fields': ['deck']}
    #      )
    # )
