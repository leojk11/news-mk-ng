import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LabelModule } from 'src/app/shared/components/label/label.module';
import { CategoryPostModule } from 'src/app/shared/components/category-post/category-post.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { PostComponent } from './post.component';

const routes: Routes = [
  {
    path: '',
    component: PostComponent
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    LabelModule,
    CategoryPostModule,
    FontAwesomeModule
  ],
  declarations: [PostComponent]
})
export class PostModule { }
