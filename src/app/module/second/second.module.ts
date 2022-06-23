import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecondComponent } from 'src/app/layouts/second-layout/second.component';
import { SecondRoutingModule } from './second-routing.module';



@NgModule({
  declarations: [
    SecondComponent
  ],
  imports: [
    CommonModule,
    SecondRoutingModule
  ]
})
export class SecondModule { }
