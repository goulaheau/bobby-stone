from django.contrib.auth.models import Group

from app.models import *
from rest_framework import serializers


class UserSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)

    class Meta:
        model = User
        fields = [
            'id',
            'username',
            'password'
        ]

    def create(self, validated_data):
        new_user = super(UserSerializer, self).create(validated_data)
        new_user.set_password(validated_data['password'])

        group = None
        group_exists = True
        try:
            group = Group.objects.get(name='Player')
        except Group.DoesNotExist:
            group_exists = False

        if group_exists:
            new_user.groups.add(group)

        new_user.save()
        return new_user


class CardSerializer(serializers.ModelSerializer):
    class Meta:
        model = Card
        fields = [
            'id',
            'name',
            'cost',
            'picture',
            'type',
            'health',
            'strength',
            'effect',
        ]


class CardValueSerializer(serializers.ModelSerializer):
    class Meta:
        model = CardValue
        fields = [
            'id',
            'user',
            'card',
            'health',
            'strength',
            'can_attack',
        ]


class DeckSerializer(serializers.ModelSerializer):
    class Meta:
        model = Deck
        fields = [
            'id',
            'name',
            'cards',
            'user',
        ]


class GameSerializer(serializers.ModelSerializer):
    class Meta:
        model = Game
        fields = [
            'id',
            'rule',
            'turn',
            'player_turn',
            'owner_mana',
            'opponent_mana',
            'owner_health',
            'opponent_health',
            'owner_deck_cards',
            'opponent_deck_cards',
            'owner_hand_cards',
            'opponent_hand_cards',
            'owner_board_card_values',
            'opponent_board_card_values',
            'owner_graveyard_cards',
            'opponent_graveyard_cards',
            'owner',
            'opponent',
            'owner_deck',
            'opponent_deck',
        ]


class CardEffectSerializer(serializers.ModelSerializer):
        class Meta:
            model = CardEffect
            fields = [
                'id',
                'name',
                'description',
                'player_affected',
                'type',
                'quantity',
            ]


class RuleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Rule
        fields = [
            'id',
            'name',
            'players_health',
            'cards_in_deck',
            'cards_to_begin',
            'cards_to_draw',
        ]
