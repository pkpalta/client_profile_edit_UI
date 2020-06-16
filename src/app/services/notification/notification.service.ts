import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { SnackbarData } from './snackbar-data.model';
import { WebSocketNotification } from './_models/notification.model';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  public snackbarSubject$ = new Subject<SnackbarData>();
  public notificationSubject$ = new Subject<WebSocketNotification>();
  private userId: string;
  public userRole: string;

  constructor() {
  }

  public showSnackbar(snackbarData: SnackbarData) {
    this.snackbarSubject$.next(snackbarData);
  }

  public notificationReceived(notification: WebSocketNotification) {
  }
}
