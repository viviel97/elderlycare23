import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AssistanceRoutingModule } from './assistance-routing.module';
import { AssistanceComponent } from 'src/app/layouts/assistance-layout/assistance.component';



@NgModule({
  declarations: [
    AssistanceComponent
  ],
  imports: [
    CommonModule,
    AssistanceRoutingModule
  ]
})
export class AssistanceModule { }
