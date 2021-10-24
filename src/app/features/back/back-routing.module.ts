import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "src/app/core/guards/auth.guard";
import { BackLayoutComponent } from "./layout/back-layout/back-layout.component";

const routes: Routes = [
    {
        path: 'login',
        loadChildren: () => import('./features/login/login.module').then(m => m.LoginModule)
    },
    {
        path: '',
        component: BackLayoutComponent,
        canLoad: [ AuthGuard ],
        canActivate: [ AuthGuard ],
        // redirectTo: 'dashboard',
        children: [
            {
                path: 'dashboard',
                loadChildren: () => import('./features/dashboard/dashboard.module').then(m => m.DashboardModule)
            },
            {
                path: 'users',
                loadChildren: () => import('./features/users/users.module').then(m => m.UsersModule)
            },
            {
                path: 'add-user',
                loadChildren: () => import('./features/add-user/add-user.module').then(m => m.AddUserModule)
            },
            {
                path: 'posts',
                loadChildren: () => import('./features/posts/posts.module').then(m => m.PostsModule)
            },
            {
                path: 'posts/:id',
                loadChildren: () => import('./features/edit-post/edit-post.module').then(m => m.EditPostModule)
            },
            {
                path: 'add-post',
                loadChildren: () => import('./features/add-post/add-post.module').then(m => m.AddPostModule)
            },
            {
                path: 'categories',
                loadChildren: () => import('./features/categories/categories.module').then(m => m.CategoriesModule)
            },
            {
                path: 'categories/:id',
                loadChildren: () => import('./features/edit-category/edit-category.module').then(m => m.EditCategoryModule)
            },
            {
                path: 'add-category',
                loadChildren: () => import('./features/add-category/add-category.module').then(m => m.AddCategoryModule)
            },
            {
                path: 'sub-categories',
                loadChildren: () => import('./features/sub-categories/sub-categories.module').then(m => m.SubCategoriesModule)
            },
            {
                path: 'sub-categories/:id',
                loadChildren: () => import('./features/edit-sub-category/edit-sub-category.module').then(m => m.EditSubCategoryModule)
            },
            {
                path: 'add-sub-category',
                loadChildren: () => import('./features/add-sub-category/add-sub-category.module').then(m => m.AddSubCategoryModule)
            }
        ]
    }
]

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ]
})

export class BackRoutingModule { }