import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PageLabelModule } from '../../layout/components/page-label/page-label.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { CategoriesComponent } from './categories.component';
import { SingleCategoryComponent } from './components/single-category/single-category.component';
import { DeleteModalComponent } from './components/delete-modal/delete-modal.component';

const routes: Routes = [
  {
    path: '',
    component: CategoriesComponent
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    PageLabelModule,
    FontAwesomeModule
  ],
  declarations: [CategoriesComponent, SingleCategoryComponent, DeleteModalComponent]
})
export class CategoriesModule { }
