import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SecondComponent } from 'src/app/layouts/second-layout/second.component';

const routes: Routes = [
  { path: '', redirectTo: 'second' },
  { path: 'second', component: SecondComponent }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SecondRoutingModule { }
