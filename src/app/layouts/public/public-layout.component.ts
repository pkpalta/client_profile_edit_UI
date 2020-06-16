import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavigationService } from 'src/app/services/navigation/navigation.service';
import { NotificationService } from 'src/app/services/notification/notification.service';

@Component({
  selector: 'app-public-layout-container',
  templateUrl: './public-layout.component.html',
  styleUrls: ['./public-layout.component.scss']
})
export class PublicLayoutComponent implements OnInit {
  public title = '';
  // constructor
  constructor(
    private router: Router,
    //private navigationService: NavigationService,
  ) {
      // console.log(" this.navigationService.navigationState",  this.navigationService.navigationState)
      // this.title = this.navigationService.navigationState.title;
  }

  // ngOnInit
  public async ngOnInit() {
   
  }

  public onLoginEvent = async () => {
  }

  public async onLogout() {
  }

  public onLogoutEvent() { }

}
