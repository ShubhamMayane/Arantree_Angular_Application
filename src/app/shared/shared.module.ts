import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoxesStructureInfoComponent } from './components/boxes-structure-info/boxes-structure-info.component';



@NgModule({
  declarations: [BoxesStructureInfoComponent],
  imports: [
    CommonModule, 
  ],
  exports: [BoxesStructureInfoComponent]
})
export class SharedModule { }
