import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './core/components/layout/landing/landing.component';

const routes: Routes = [
  {path:'user',
  loadChildren:() => import('./user/user.module').then((m) => m.UserModule),},
  {path:'dashboard',
   loadChildren:() => import('./dashboard/dashboard.module').then((m) => m.DashboardModule)
},
  {
    path: '', 
    component:LandingComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
