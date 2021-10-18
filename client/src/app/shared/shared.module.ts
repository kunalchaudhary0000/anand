import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TokenInterceptor } from './interceptors/token.interceptor';
import { LogInterceptor } from './interceptors/log.interceptor';
import { ErrorInterceptor } from './interceptors/error.interceptor';
import { HeaderInterceptor } from './interceptors/header.interceptor';
import { intercepts } from './interceptors';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [intercepts],
  
})
export class SharedModule { }
