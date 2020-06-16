import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { NavigationState } from '../../../../services/navigation/_models/navigation-state.model';
import { BaseComponent } from 'leatherman-bootstrap';
import { WebSocketNotification } from '../../../../services/notification/_models/notification.model';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { NavigationService } from 'src/app/services/navigation/navigation.service';

@Component({
  selector: 'app-public-single-skip-trace',
  templateUrl: './public-single-skip-trace.component.html',
  styleUrls: ['./public-single-skip-trace.component.scss']
})
export class PublicSingleSkipTraceComponent extends BaseComponent
  implements OnInit, AfterViewInit, OnDestroy {

  // constructor
  constructor(
    private router: Router,
    private navigationService: NavigationService,
    // private navigationState: NavigationState,
  ) {
    super();
    console.log("NavigationState")
    //this.navigationState = new NavigationState();
    //this.navigationState.title = 'Single Skip Trace';
    // console.log("this.navigationState.title ", this.navigationState.title )
    // this.navigationService.updateNavigationState(this.navigationState);
  }

  // ngOnInit
  public async ngOnInit() {
    this.isLoading = true;
    await this.loadData();
    this.initForm();
    this.isLoading = false;
    this.isInitialized = true;
  }

  // ngAfterViewInit
  public async ngAfterViewInit() {
  }

  public onBackLinkClicked() {
    this.router.navigate(['app/dashboard']);
  }

  public onNext() {
    
  }

  // onNotification
  public onNotification = async (notification: WebSocketNotification) => { };

  private initForm() {
  }

  private async loadData() {
  }
}
