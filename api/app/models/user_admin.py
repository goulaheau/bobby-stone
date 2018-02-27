from django.contrib import admin


class UserAdmin(admin.ModelAdmin):
    list_display = [
        'id',
        'username',
        'last_login',
        'is_staff',
        'is_active',
        'is_superuser'
    ]
    list_filter = [
        'id',
        'username',
        'last_login',
        'is_staff',
        'is_active',
        'is_superuser'
    ]
    ordering = ['id']
