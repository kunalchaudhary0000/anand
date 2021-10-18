import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'user', loadChildren: () => import('./user-dashboard/user-dashboard.module').then(m=>m.UserDashboardModule) }, 

  {path: 'agent', loadChildren: () => import('./agent-dashboard/agent-dashboard.module').then(m=>m.AgentDashboardModule) },
  
  {path: 'admin', loadChildren: () => import('./admin-dashboard/admin-dashboard.module').then(m=>m.AdminDashboardModule) } 

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
