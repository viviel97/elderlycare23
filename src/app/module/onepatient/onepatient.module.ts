import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OnepatientRoutingModule } from './onepatient-routing.module';
import { OnepatientComponent } from 'src/app/layouts/onepatient-layout/onepatient.component';



@NgModule({
  declarations: [
    OnepatientComponent
  ],
  imports: [
    CommonModule,
    OnepatientRoutingModule
  ]
})
export class OnepatientModule { }
