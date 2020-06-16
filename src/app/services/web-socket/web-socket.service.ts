import { Injectable, Inject } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import * as socketIo from 'socket.io-client';
import { WebSocketNotification } from '../notification/_models/notification.model';
import {
  LeathermanAppConfigInjectionToken,
  ILeathermanAppConfig
} from 'leatherman-bootstrap';

@Injectable({
  providedIn: 'root'
})
export class WwbSocketService {
  private socket: SocketIOClient.Socket;
  private observer: Observer<WebSocketNotification>;

  constructor(
    @Inject(LeathermanAppConfigInjectionToken)
    private config: ILeathermanAppConfig
  ) {}

  getNotifications(): Observable<WebSocketNotification> {
    this.socket = socketIo(this.config.serverUrl);

    this.socket.on('notification', res => {
      this.observer.next(res.data);
    });

    return this.createObservable();
  }

  createObservable(): Observable<WebSocketNotification> {
    return new Observable(observer => {
      this.observer = observer;
    });
  }
}
