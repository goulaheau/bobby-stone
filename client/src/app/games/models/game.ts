export interface Game {
  id?: number;

  rule?: any;

  turn?: number;
  player_turn?: any;

  owner?: any;
  opponent?: any;

  owner_mana?: number;
  opponent_mana?: number;

  owner_health?: number;
  opponent_health?: number;

  owner_deck?: any;
  opponent_deck?: any;

  owner_deck_cards?: any;
  opponent_deck_cards?: any;

  owner_hand_cards?: any;
  opponent_hand_cards?: any;

  owner_board_card_values?: any;
  opponent_board_card_values?: any;

  owner_graveyard_cards?: any;
  opponent_graveyard_cards?: any;
}
