import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SmallPostModule } from 'src/app/shared/components/small-post/small-post.module';
import { LabelModule } from 'src/app/shared/components/label/label.module';
import { CategoryPostModule } from 'src/app/shared/components/category-post/category-post.module';

import { CategoryComponent } from './category.component';
import { CategoryPagePostComponent } from './category-page-post/category-page-post.component';

const routes: Routes = [
  {
    path: '',
    component: CategoryComponent
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SmallPostModule,
    LabelModule,
    CategoryPostModule
  ],
  declarations: [CategoryComponent, CategoryPagePostComponent]
})
export class CategoryModule { }
