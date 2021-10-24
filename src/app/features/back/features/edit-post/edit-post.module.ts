import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PageLabelModule } from '../../layout/components/page-label/page-label.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { EditPostComponent } from './edit-post.component';

const routes: Routes = [
  {
    path: '',
    component: EditPostComponent
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FontAwesomeModule,
    PageLabelModule,
    ReactiveFormsModule,
    FormsModule
  ],
  declarations: [EditPostComponent]
})
export class EditPostModule { }
