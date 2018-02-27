from rest_framework import viewsets
from rest_framework.authtoken.models import Token
from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.response import Response

from app.models import Deck, User, Card, Game, CardValue, Rule, CardEffect
from app.serializers import DeckSerializer, UserSerializer, CardSerializer, \
    GameSerializer, CardValueSerializer, RuleSerializer, CardEffectSerializer


class CustomObtainAuthToken(ObtainAuthToken):
    def post(self, request, *args, **kwargs):
        response = super(CustomObtainAuthToken, self) \
            .post(request, *args, **kwargs)

        token = Token.objects.get(key=response.data['token'])

        return Response({
            'token': token.key,
            'user': UserSerializer(token.user).data
        })


class DeckViewSet(viewsets.ModelViewSet):
    queryset = Deck.objects.all()
    serializer_class = DeckSerializer
    filter_fields = [
        'id',
        'name',
        'cards',
        'user',
    ]


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    filter_fields = [
        'id',
        'username',
    ]


class CardViewSet(viewsets.ModelViewSet):
    queryset = Card.objects.all()
    serializer_class = CardSerializer
    filter_fields = [
        'id',
        'name',
        'cost',
        'type',
        'health',
        'strength',
        'effect',
    ]


class GameViewSet(viewsets.ModelViewSet):
    queryset = Game.objects.all()
    serializer_class = GameSerializer
    filter_fields = [
        'id',
        'owner',
        'owner_deck',
        'opponent',
        'opponent_deck'
    ]


class CardEffectViewSet(viewsets.ModelViewSet):
    queryset = CardEffect.objects.all()
    serializer_class = CardEffectSerializer
    filter_fields = [
        'id',
        'name',
        'description',
        'player_affected',
        'type',
        'quantity',
    ]


class CardValueViewSet(viewsets.ModelViewSet):
    queryset = CardValue.objects.all()
    serializer_class = CardValueSerializer
    filter_fields = [
        'id',
        'user',
        'card',
        'health',
        'strength',
    ]


class RuleViewSet(viewsets.ModelViewSet):
    queryset = Rule.objects.all()
    serializer_class = RuleSerializer
    filter_fields = [
        'id',
        'name',
        'players_health',
        'cards_in_deck',
        'cards_to_begin',
        'cards_to_draw',
    ]
