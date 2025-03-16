import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicesComponent } from './services.component';
import { ServicesHeaderComponent } from './components/services-header/services-header.component';
import { ServicesCounterSectionComponent } from './components/services-counter-section/services-counter-section.component';
import { ServicesDescriptionSectionComponent } from './components/services-description-section/services-description-section.component';
import { ServicesSectorsCarouselComponent } from './components/services-sectors-carousel/services-sectors-carousel.component';
import { ServicesHeadingWithDescriptionComponent } from './components/services-heading-with-description/services-heading-with-description.component';
import { ServicesBoxStructureComponent } from './components/services-box-structure/services-box-structure.component';
import { ServicesBenifitsSectionComponent } from './components/services-benifits-section/services-benifits-section.component';
import { ServicesTextSliderComponent } from './components/services-text-slider/services-text-slider.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    ServicesComponent,
    ServicesHeaderComponent,
    ServicesCounterSectionComponent,
    ServicesDescriptionSectionComponent,
    ServicesSectorsCarouselComponent,
    ServicesHeadingWithDescriptionComponent,
    ServicesBoxStructureComponent,
    ServicesBenifitsSectionComponent,
    ServicesTextSliderComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class ServicesModule { }
