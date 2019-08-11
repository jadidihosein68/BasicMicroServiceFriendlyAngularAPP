import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SampleTabComponent } from './sampletab.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [
    SampleTabComponent
  ],
  exports: [
    SampleTabComponent
   ]
})
export class SampleTabModule { }