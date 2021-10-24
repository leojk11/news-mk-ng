import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PageLabelModule } from '../../layout/components/page-label/page-label.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgxPaginationModule } from 'ngx-pagination';

import { PostsComponent } from './posts.component';
import { SinglePostComponent } from './components/single-post/single-post.component';
import { DeletePostModalComponent } from './components/delete-post-modal/delete-post-modal.component';

const routes: Routes = [
  {
    path: '',
    component: PostsComponent
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    PageLabelModule,
    ReactiveFormsModule,
    FormsModule,
    FontAwesomeModule,
    NgxPaginationModule
  ],
  declarations: [PostsComponent, SinglePostComponent, DeletePostModalComponent]
})
export class PostsModule { }
