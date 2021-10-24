import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageLabelComponent } from './page-label.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PageLabelComponent],
  exports: [PageLabelComponent]
})
export class PageLabelModule { }
