import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { PatientComponent } from 'src/app/layouts/patient-layout/patient.component';
import { PatientRoutingModule } from './patient-routing.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    PatientComponent
  ],
  imports: [
    CommonModule,
    PatientRoutingModule,FormsModule
  ]
})
export class PatientModule { }
