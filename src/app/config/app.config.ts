import { ILeathermanAppConfig } from 'leatherman-bootstrap';
import { environment } from '../../environments/environment';

export const appConfig: ILeathermanAppConfig = {
  production: environment.production,
  serverUrl: environment.serverUrl,
  apiRoot: '',
  jwtTokenName: '_usefuldata_token',
  registerRoute: '/user',
  clientErrorEndpoint: '/api/error/client',
  errorRoute: '/something-broke',
  userBaseEndpoint: '/user',
};
