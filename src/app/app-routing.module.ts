import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateEmployeeComponent } from './home/create-employee/create-employee.component';
import { HomesComponent } from './home/homes/homes.component';

const routes: Routes = 
[
  {path:"", component:HomesComponent},
  {path:"create-employee", component:CreateEmployeeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
