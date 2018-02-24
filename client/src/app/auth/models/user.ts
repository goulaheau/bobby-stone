export interface Authenticate {
  name?: string;
  username: string;
  password: string;
}

export interface User {
  id?: number;
  username?: string;
  decks?: any[];
}
