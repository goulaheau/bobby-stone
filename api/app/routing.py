from channels.routing import route

from app.consumers import ws_connect, ws_receive, ws_disconnect

channel_routing = [
    route(
        'websocket.connect',
        ws_connect,
        path=r'^/games/(?P<game_id>[0-9]+)/(?P<user_id>[0-9]+)/$'
    ),
    route(
        'websocket.receive',
        ws_receive,
        path=r'^/games/(?P<game_id>[0-9]+)/(?P<user_id>[0-9]+)/$'
    ),
    route(
        'websocket.disconnect',
        ws_disconnect,
        path=r'^/games/(?P<game_id>[0-9]+)/(?P<user_id>[0-9]+)/$'
    ),
]
