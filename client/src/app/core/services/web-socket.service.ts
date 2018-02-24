import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs/Subject';
import { Observer }   from 'rxjs/Observer';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class WebSocketService {
  constructor() {
  }

  connect(url: string): WebSocket {
    return new WebSocket(url);
  }
}
