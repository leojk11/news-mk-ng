import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PageLabelModule } from '../../layout/components/page-label/page-label.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AddCategoryComponent } from './add-category.component';

const routes: Routes = [
  {
    path: '',
    component: AddCategoryComponent
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    PageLabelModule,
    ReactiveFormsModule,
    FormsModule,
    FontAwesomeModule
  ],
  declarations: [AddCategoryComponent]
})
export class AddCategoryModule { }
