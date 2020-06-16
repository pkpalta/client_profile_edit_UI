export class NavigationState {
  public route: string;
  public title: string;
  public tabs: NavigationStateTab[] = [];
  public selectedTabIndex: number;

  public addTab(label: string, route: string, icon: string): void {
    const tab = new NavigationStateTab(label, route, icon);
    this.tabs.push(tab);
  }
}

export class NavigationStateTab {
  constructor(
    public label: string,
    public route: string,
    public icon: string
  ) {}
}
