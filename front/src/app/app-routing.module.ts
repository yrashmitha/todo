import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AboutComponent} from "./about/about.component";
import {TaskComponent} from "./task/task.component";


const routes: Routes = [
  {
    path:"",
    component:TaskComponent
  },
  {
    path:"route",
    component:AboutComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
