import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponent } from 'src/app/layouts/first-layout/first.component';


const routes: Routes = [
  { path: '', redirectTo: 'first' },
  { path: 'first', component: FirstComponent }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FirstRoutingModule { }
