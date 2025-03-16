import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutusComponent } from './aboutus.component';
import { AboutUsHeaderComponent } from './components/about-us-header/about-us-header.component';
import { AboutUsDescreptionComponent } from './components/about-us-descreption/about-us-descreption.component';
import { AboutUsImageCardsComponent } from './components/about-us-image-cards/about-us-image-cards.component';
import { AboutUsOurFoundersComponent } from './components/about-us-our-founders/about-us-our-founders.component';
import { AboutUsOurTeamComponent } from './components/about-us-our-team/about-us-our-team.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    AboutusComponent,
    AboutUsHeaderComponent,
    AboutUsDescreptionComponent,
    AboutUsImageCardsComponent,
    AboutUsOurFoundersComponent,
    AboutUsOurTeamComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class AboutusModule { }
