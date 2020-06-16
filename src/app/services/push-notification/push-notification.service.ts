import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  Dto,
  Status,
  LeathermanAppConfigInjectionToken,
  ILeathermanAppConfig,
  UrlUtil
} from 'leatherman-bootstrap';

@Injectable({
  providedIn: 'root'
})
export class PushNotificationService {
  private serverUrl: string;
  constructor(
    private httpClient: HttpClient,
    @Inject(LeathermanAppConfigInjectionToken) config: ILeathermanAppConfig
  ) {
    this.serverUrl = UrlUtil.join(config.serverUrl, 'web-push/subscription');
  }

  public async sendSubscriptionToTheServer(
    subscription: PushSubscription
  ): Promise<boolean> {
    // return this.http.post(SERVER_URL, subscription);
    let result: Dto;

    try {
      result = await this.httpClient
        .post<Dto>(this.serverUrl, subscription)
        .toPromise()
        .catch(() => {
          return null;
        });
    } catch (error) {
      throw error;
    }

    return result.status.code === Status.OK ? true : false;
  }
}
