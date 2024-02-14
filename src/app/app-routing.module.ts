import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { StatisticsComponent } from './Statistics/Statistics.component';
import { PatientsComponent } from './Patients/Patients.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'patients', component: PatientsComponent },
  { path: 'statistics', component: StatisticsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
