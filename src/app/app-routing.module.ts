import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

import { AboutusComponent } from './aboutus/aboutus.component';
import { ServicesComponent } from './services/services.component';


const routes: Routes = [
{path:"home",component:HomeComponent},
{path:"aboutus",component:AboutusComponent},
{path:"services",component:ServicesComponent},
{path:"",redirectTo:"/home",pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
