import json
from channels import Group
from app.models import Game, User
from .game import action_switcher


def ws_connect(message, game_id, user_id):
    message.reply_channel.send({'accept': True})
    Group(game_id).add(message.reply_channel)


def ws_receive(message, game_id, user_id):
    game = Game.objects.get(id=game_id)
    user = User.objects.get(id=user_id)
    event = json.loads(message.content['text'])

    res = action_switcher(game, user, event['action'], event['payload'])

    Group(game_id).send({
        'text': json.dumps(res)
    })


def ws_disconnect(message, game_id, user_id):
    Group(game_id).discard(message.reply_channel)
