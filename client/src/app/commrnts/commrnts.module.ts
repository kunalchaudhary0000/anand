import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommrntsRoutingModule } from './commrnts-routing.module';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedModule,
    CommrntsRoutingModule
  ]
})
export class CommrntsModule { }
