import { NgModule } from '@angular/core';
import { LeathermanUikitMdcModule } from 'src/app/mdc.module';
import { PublicSingleSkipTraceComponent } from './single-skip-trace/page-1/public-single-skip-trace.component';
import { PublicBatchSkipTraceComponent } from './batch-skip-trace/page-1/public-batch-skip-trace.component';
import { PublicRoutingModule } from './public-routing.module';
import { AngularModule } from 'src/app/angular.module';
import { SharedModule } from 'src/app/shared.module';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    AngularModule,
    SharedModule,
    LeathermanUikitMdcModule,
    PublicRoutingModule
  ],
  declarations: [
    PublicSingleSkipTraceComponent,
    PublicBatchSkipTraceComponent
  ]
})
export class PublicModule { }
