import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmergenciesRoutingModule } from './emergencies-routing.module';
import { EmergenciesComponent } from 'src/app/layouts/emergencies-layout/emergencies.component';



@NgModule({
  declarations: [
    EmergenciesComponent
  ],
  imports: [
    CommonModule,
    EmergenciesRoutingModule
  ]
})
export class EmergenciesModule { }
