import { NgModule } from '@angular/core';
import { LeathermanUikitMdcModule } from './mdc.module';
import { AngularModule } from './angular.module';
import { DebounceClickDirective } from './directives/debounce-click.directive';

@NgModule({
    imports: [
        AngularModule,
        LeathermanUikitMdcModule,
    ],
    exports: [
        DebounceClickDirective
    ],
    declarations: [
        DebounceClickDirective
    ]
})
export class SharedModule { }
