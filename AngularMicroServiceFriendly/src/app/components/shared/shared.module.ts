import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomModalComponent } from './modal/modal.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    CustomModalComponent
  ],
  exports: [
    CommonModule,
    NgbModule,
    CustomModalComponent
   ]
})
export class SharedModule { }