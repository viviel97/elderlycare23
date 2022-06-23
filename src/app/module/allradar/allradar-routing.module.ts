import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllradarComponent } from 'src/app/layouts/allradar-layout/allradar.component';

const routes: Routes = [{ path: '', component: AllradarComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AllradarRoutingModule { }
