import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { PageLabelModule } from '../../layout/components/page-label/page-label.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AddAdminComponent } from './containers/add-admin.component';

const routes: Routes = [
  {
    path: '',
    component: AddAdminComponent
  }
]

@NgModule({
  declarations: [
    AddAdminComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    FormsModule,
    PageLabelModule,
    FontAwesomeModule
  ]
})
export class AddAdminModule { }
