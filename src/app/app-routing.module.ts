import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthGuard } from './utility/app.guard';

const routes: Routes = [
  { path: '', redirectTo: 'first', pathMatch: 'full' },
  { path: '', loadChildren:() => import ("./module/first/first.module").then(m => m.FirstModule)},
  { path: '', loadChildren:() => import ("./module/second/second.module").then(m => m.SecondModule), canActivate: [AuthGuard]},
  { path: '', loadChildren:() => import ("./module/login/login.module").then(m => m.LoginModule), },
  { path: '', loadChildren:() => import ("./module/home/home.module").then(m => m.HomeModule), canActivate: [AuthGuard]  },
  { path: '', loadChildren:() => import ("./module/radar/radar.module").then(m => m.RadarModule), canActivate: [AuthGuard] },
  { path: '', loadChildren:() => import ("./module/patient/patient.module").then(m => m.PatientModule), canActivate: [AuthGuard] },
  { path: '', loadChildren: () => import('./module/assistance/assistance.module').then(m => m.AssistanceModule), canActivate: [AuthGuard] },
  { path: 'emergencies', loadChildren: () => import('./module/emergencies/emergencies.module').then(m => m.EmergenciesModule), canActivate: [AuthGuard] },
  { path: 'allradar', loadChildren: () => import('./module/allradar/allradar.module').then(m => m.AllradarModule), canActivate: [AuthGuard] },
  { path: 'addpatient', loadChildren: () => import('./module/addpatient/addpatient.module').then(m => m.AddpatientModule), canActivate: [AuthGuard] },
  { path: 'onepatient', loadChildren: () => import('./module/onepatient/onepatient.module').then(m => m.OnepatientModule), canActivate: [AuthGuard] },

]
@NgModule({
  imports: [RouterModule.forRoot(routes), ReactiveFormsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
