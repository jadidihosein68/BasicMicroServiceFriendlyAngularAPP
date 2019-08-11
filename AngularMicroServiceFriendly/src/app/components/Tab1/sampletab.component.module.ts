import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SampleTabComponent } from './sampletab.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    SampleTabComponent
  ],
  exports: [
    SampleTabComponent
   ]
})
export class SampleTabModule { }