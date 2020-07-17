import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PublicLayoutComponent } from './layouts/public/public-layout.component';
import { AuthGuardUtil } from './util/auth-guard/auth-guard.util';
import { ComponentNameComponent } from './layouts/bulk/component-name.component';
import { HelloComponent } from './layouts/customField/hello.component';
import { DashboardComponent } from './layouts/dashboard/dashboard.component';
import { OrderListComponent } from './layouts/order-list/order-list.component';
import { SingletraceComponent } from './layouts/singletrace/singletrace.component';
import { TeamComponent } from './layouts/team/team.component';

export const routes: Routes = [
  {
    path: '',
    canActivate: [AuthGuardUtil],
    component: PublicLayoutComponent,
    data: { roles: ['user'] },
    children: [
      { path: 'app', loadChildren: './pages/public/public.module#PublicModule' }
    ]
  },
  {
    path: 'bulk',
    canActivate: [AuthGuardUtil],
    component: ComponentNameComponent,
  },
  {
    path: 'custom',
    canActivate: [AuthGuardUtil],
    component: HelloComponent,
  },
  {
    path: 'dashboard',
    canActivate: [AuthGuardUtil],
    component: DashboardComponent,
  },
  {
    path: 'orderlist',
    canActivate: [AuthGuardUtil],
    component: OrderListComponent,
  },
  {
    path: 'singletrace',
    canActivate: [AuthGuardUtil],
    component: SingletraceComponent,
  },
  {
    path: 'team',
    canActivate: [AuthGuardUtil],
    component: TeamComponent,
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
