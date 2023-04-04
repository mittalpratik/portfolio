import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PersonalDetailsComponent} from "./personal-details/personal-details.component";
import {AmchartComponent} from "./amchart/amchart.component";


const routes: Routes = [
  { path: 'personal-details', component: PersonalDetailsComponent },
  { path: 'education', component: AmchartComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
