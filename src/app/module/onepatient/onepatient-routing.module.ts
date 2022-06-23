import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OnepatientComponent } from 'src/app/layouts/onepatient-layout/onepatient.component';

const routes: Routes = [{ path: '', component: OnepatientComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OnepatientRoutingModule { }
