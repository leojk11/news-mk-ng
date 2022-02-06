import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PageLabelModule } from '../../layout/components/page-label/page-label.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { SubCategoriesComponent } from './sub-categories.component';
import { SubCategoryComponent } from './components/sub-category/sub-category.component';
import { DeleteSubCategoryModalComponent } from './components/delete-sub-category-modal/delete-sub-category-modal.component';

const routes: Routes = [
  {
    path: '',
    component: SubCategoriesComponent
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    PageLabelModule,
    FontAwesomeModule,
    MatProgressSpinnerModule
  ],
  declarations: [
    SubCategoriesComponent, 
    SubCategoryComponent, 
    DeleteSubCategoryModalComponent
  ]
})
export class SubCategoriesModule { }
