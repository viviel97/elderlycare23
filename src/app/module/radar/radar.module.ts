import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RadarRoutingModule } from './radar-routing.module';
import { NgApexchartsModule } from 'ng-apexcharts';
import { RadarComponent } from "src/app/layouts/radar-layout/radar.component";




@NgModule({
  declarations: [ RadarComponent ],
  imports: [
    CommonModule,
    RadarRoutingModule,
    NgApexchartsModule,

  ]
})
export class RadarModule { }
