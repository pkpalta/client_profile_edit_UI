import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PublicLayoutComponent } from './layouts/public/public-layout.component';
import { AuthGuardUtil } from './util/auth-guard/auth-guard.util';

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
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
