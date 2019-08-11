import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomModalComponent } from './modal/modal.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    CustomModalComponent
  ],
  exports: [
    CustomModalComponent
   ]
})
export class SharedModule { }