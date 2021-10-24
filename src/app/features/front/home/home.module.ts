import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SmallPostModule } from 'src/app/shared/components/small-post/small-post.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CategoryPostModule } from 'src/app/shared/components/category-post/category-post.module';

import { HomeComponent } from './home.component';
import { BigPostComponent } from './components/big-post/big-post.component';
import { CategoryCardComponent } from './components/category-card/category-card.component';
import { CategorySmallPostComponent } from './components/category-small-post/category-small-post.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: {
      title: 'Home'
    }
  }
];

@NgModule({
  declarations: [HomeComponent, BigPostComponent, CategoryCardComponent, CategorySmallPostComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SmallPostModule,
    FontAwesomeModule,
    CategoryPostModule
  ]
})
export class HomeModule { }
