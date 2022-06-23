import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssistanceComponent } from 'src/app/layouts/assistance-layout/assistance.component';

const routes: Routes = [
  { path: '', redirectTo: 'assistance' },
  { path: 'assistance', component: AssistanceComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AssistanceRoutingModule { }
