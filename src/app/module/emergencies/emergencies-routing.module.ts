import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmergenciesComponent } from 'src/app/layouts/emergencies-layout/emergencies.component';


const routes: Routes = [{ path: '', component: EmergenciesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmergenciesRoutingModule { }
