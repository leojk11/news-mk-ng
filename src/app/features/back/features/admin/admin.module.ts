import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PageLabelModule } from '../../layout/components/page-label/page-label.module';

import { AdminComponent } from './admin.component';
import { SingleAdminComponent } from './components/single-admin/single-admin.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent
  }
]

@NgModule({
  declarations: [
    AdminComponent,
    SingleAdminComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    PageLabelModule
  ]
})
export class AdminModule { }
