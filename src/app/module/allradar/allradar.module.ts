import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AllradarRoutingModule } from './allradar-routing.module';
import { AllradarComponent } from 'src/app/layouts/allradar-layout/allradar.component';


@NgModule({
  declarations: [
    AllradarComponent
  ],
  imports: [
    CommonModule,
    AllradarRoutingModule
  ]
})
export class AllradarModule { }
