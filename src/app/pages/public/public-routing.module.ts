import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PublicSingleSkipTraceComponent } from './single-skip-trace/page-1/public-single-skip-trace.component';
import { PublicBatchSkipTraceComponent } from './batch-skip-trace/page-1/public-batch-skip-trace.component';

const routes: Routes = [
  {
    path: 'single-skip-trace',
    component: PublicSingleSkipTraceComponent,
    data: { title: 'Single Skip Trace', breadcrumb: 'Single Skip Trace' }
  },
  {
    path: 'batch-skip-trace',
    component: PublicBatchSkipTraceComponent,
    data: { title: 'Batch Skip Trace', breadcrumb: 'Batch Skip Trace' }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
