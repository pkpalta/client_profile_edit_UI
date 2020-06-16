import { NgModule } from '@angular/core';
import { LeathermanUikitMdcModule } from 'src/app/mdc.module';
import { AngularModule } from 'src/app/angular.module';
import { SharedModule } from 'src/app/shared.module';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    AngularModule,
    SharedModule,
    LeathermanUikitMdcModule,
  ],
  declarations: [
  ]
})
export class AdminModule { }
