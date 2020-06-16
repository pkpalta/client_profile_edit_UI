import { NgModule, APP_INITIALIZER } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LeathermanUikitMdcModule } from './mdc.module';
import {
  LeathermanModule,
  ErrorDialogService,
  ConfirmDialogService
} from 'leatherman-bootstrap';
import { appConfig } from './config/app.config';
import { AngularModule } from './angular.module';
import { ServiceWorkerModule } from '@angular/service-worker';
import { PluralizePipe } from './pipes/pluralize.pipe';
import { DatePipe, DecimalPipe } from '@angular/common';
import { SharedModule } from './shared.module';
import { PublicLayoutComponent } from './layouts/public/public-layout.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './util/auth-interceptor/auth-interceptor.util';

@NgModule({
  declarations: [
    AppComponent,
    PublicLayoutComponent,
    PluralizePipe,
  ],
  imports: [
    AngularModule,
    SharedModule,
    BrowserAnimationsModule,
    LeathermanUikitMdcModule,
    LeathermanModule.forRoot(
      appConfig,
      ErrorDialogService,
      ConfirmDialogService
    ),
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: true })
  ],
  providers: [PluralizePipe, DatePipe, DecimalPipe, {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent],
  entryComponents: [
  ]
})
export class AppModule { }
