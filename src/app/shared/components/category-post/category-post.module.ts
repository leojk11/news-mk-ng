import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { CategoryPostComponent } from './category-post.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [CategoryPostComponent],
  exports: [CategoryPostComponent]
})
export class CategoryPostModule { }
