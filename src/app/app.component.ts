import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { WwbSocketService } from './services/web-socket/web-socket.service';
import { Subscription } from 'rxjs';
import { NotificationService } from './services/notification/notification.service';
import { environment } from 'src/environments/environment';

const VAPID_PUBLIC = 'BB6hLgxYLWMcjL-LZasiZDt46MITEVOGrK-eopV0Ymo5lgh0ixOvmtFkrxWJkMllGU0gbsbjgbnu2rOSrQQnVrU';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>',
})
export class AppComponent implements OnInit, OnDestroy {
  public title = 'app';
  public webSocketSubscription: Subscription;
  public notificationSubscription: Subscription;

  constructor(
    private router: Router,
    private webSocketService: WwbSocketService,
    private notificationService: NotificationService
  ) { }

  public async ngOnInit() {
    console.log('Mode: ' + environment.name);
    console.log('Server URL ' + environment.serverUrl);
    this.router.events.subscribe(evt => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
    });

    this.notificationSubscription = this.webSocketService.getNotifications().subscribe(notification => {
      this.notificationService.notificationReceived(notification);
    });
  }

  public ngOnDestroy() {
    this.webSocketSubscription.unsubscribe();
  }
}
