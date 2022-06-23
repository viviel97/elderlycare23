import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RadarComponent } from "src/app/layouts/radar-layout/radar.component";

const routes: Routes = [
  { path: '', redirectTo: 'radar' },
  { path: 'radar', component: RadarComponent }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RadarRoutingModule { }
