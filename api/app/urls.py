from django.conf.urls import url, include
from rest_framework.routers import DefaultRouter
from app import views

router = DefaultRouter()
router.register(r'decks', views.DeckViewSet)
router.register(r'users', views.UserViewSet)
router.register(r'cards', views.CardViewSet)
router.register(r'games', views.GameViewSet)
router.register(r'card-values', views.CardValueViewSet)
router.register(r'card-effects', views.CardEffectViewSet)
router.register(r'rules', views.RuleViewSet)

urlpatterns = [
    url(r'^', include(router.urls)),
    url(r'^auth/', views.CustomObtainAuthToken.as_view()),
]
