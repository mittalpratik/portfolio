import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PersonalDetailsComponent} from "./personal-details/personal-details.component";
import {AmchartComponent} from "./amchart/amchart.component";
import {BubbleChartComponent} from "./bubble-chart/bubble-chart.component";


const routes: Routes = [
  { path: 'personal-details', component: PersonalDetailsComponent },
  { path: 'education', component: AmchartComponent },
  { path: 'skills', component: BubbleChartComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
