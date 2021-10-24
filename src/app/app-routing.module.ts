import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';
import { NotFoundComponent } from './layout/components/not-found/not-found.component';
import {MainLayoutComponent} from './layout/main-layout/main-layout.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'back',
    loadChildren: () => import('./features/back/back.module').then(m => m.BackModule),

  },
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: 'home',
        loadChildren: () => import('./features/front/home/home.module').then(m => m.HomeModule)
      },
      {
        path: 'post/:id',
        loadChildren: () => import('./features/front/post/post.module').then(m => m.PostModule)
      },
      {
        path: 'category/:id',
        loadChildren: () => import('./features/front/category/category.module').then(m => m.CategoryModule)
      },
      {
        path: '**',
        component: NotFoundComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
