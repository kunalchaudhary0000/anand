import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserDashboardRoutingModule } from './user-dashboard-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DashboardActionComponent } from './components/dashboard-action/dashboard-action.component';
import { DashboardExpComponent } from './components/dashboard-exp/dashboard-exp.component';
import { DashboardEduComponent } from './components/dashboard-edu/dashboard-edu.component';


@NgModule({
  declarations: [
    
  DashboardComponent,
    DashboardActionComponent,
            DashboardExpComponent,
            DashboardEduComponent
  ],
  imports: [
    CommonModule,
    UserDashboardRoutingModule
  ]
})
export class UserDashboardModule { }
