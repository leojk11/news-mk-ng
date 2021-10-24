import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SmallPostComponent } from './small-post.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [SmallPostComponent],
  exports: [SmallPostComponent]
})
export class SmallPostModule { }
