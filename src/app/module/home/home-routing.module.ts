import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from 'src/app/layouts/home-layout/home.component';

const routes: Routes = [
  { path: '', redirectTo: 'home' },
  { path: 'home', component: HomeComponent }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
