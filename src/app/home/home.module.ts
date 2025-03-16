import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HeaderImageComponent } from './components/header-image/header-image.component';
import { HeadingLargeComponent } from './components/heading-large/heading-large.component';
import { HorizontalCardComponent } from './components/horizontal-card/horizontal-card.component';
import { OurServiceInfoComponent } from './components/our-service-info/our-service-info.component';
import { ImgWithLinksComponent } from './components/img-with-links/img-with-links.component';

import { OurSectorsComponent } from './components/our-sectors/our-sectors.component';
import { AboutUsCardComponent } from './components/about-us-card/about-us-card.component';
import { ImageListComponent } from './components/image-list/image-list.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    HomeComponent,
    HeaderImageComponent,
    HeadingLargeComponent,
    HorizontalCardComponent,
    OurServiceInfoComponent,
    ImgWithLinksComponent,
    OurSectorsComponent,
    AboutUsCardComponent,
    ImageListComponent,
 
  ],
  imports: [
    CommonModule,
    SharedModule
  
  ]
})
export class HomeModule { }
