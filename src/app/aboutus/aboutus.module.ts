import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutusComponent } from './aboutus.component';
import { AboutUsHeaderComponent } from './components/about-us-header/about-us-header.component';
import { AboutUsDescreptionComponent } from './components/about-us-descreption/about-us-descreption.component';



@NgModule({
  declarations: [
    AboutusComponent,
    AboutUsHeaderComponent,
    AboutUsDescreptionComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AboutusModule { }
