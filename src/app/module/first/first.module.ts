import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { FirstRoutingModule } from './first-routing.module'
import { FirstComponent } from 'src/app/layouts/first-layout/first.component';


@NgModule({
  declarations: [
    FirstComponent
  ],
  imports: [
    CommonModule,
    FirstRoutingModule
  ]
})
export class FirstModule { }
