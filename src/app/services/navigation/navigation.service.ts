import { Injectable } from '@angular/core';
import { NavigationState } from './_models/navigation-state.model';
import { Subject, AsyncSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  public navigationState: NavigationState;
  public navigationState$ = new Subject<NavigationState>();

  constructor() {
    this.navigationState = new NavigationState();
    this.navigationState.title = 'Home';
    this.navigationState.selectedTabIndex = 0;
    this.navigationState.addTab('Welcome', '/', 'home');
    this.navigationState.addTab(
      'Getting Started',
      '/home/getting-started',
      'info'
    );
    this.navigationState.addTab(
      'Getting Help',
      '/home/getting-hep',
      'help'
    );
    this.publish();
  }

  public addTab(label: string, route: string, icon: string) {
    this.navigationState.addTab(label, route, icon);
  }

  public clearTabs(): void {
    this.navigationState.tabs = [];
  }

  public publish(): void {
    this.navigationState$.next(this.navigationState);
  }

  public updateNavigationState(navigationState: NavigationState): void {
    console.log("hghfghfg", navigationState)
    this.navigationState = navigationState;
    this.navigationState$.next(navigationState);
  }
}
