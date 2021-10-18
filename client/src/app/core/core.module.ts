import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/layout/header/header.component';
import { LandingComponent } from './components/layout/landing/landing.component';

import { RouterModule } from '@angular/router';
import { FooterComponent } from './components/layout/footer/footer.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    HeaderComponent,
    LandingComponent,
    FooterComponent,
    
  ],
  imports: [
    CommonModule,SharedModule,RouterModule,
    
  ],
  exports: [HeaderComponent,FooterComponent,LandingComponent]
})
export class CoreModule { }
