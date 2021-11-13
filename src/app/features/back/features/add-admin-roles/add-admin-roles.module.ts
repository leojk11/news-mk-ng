import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PageLabelModule } from '../../layout/components/page-label/page-label.module';

import { AddAdminRolesComponent } from './add-admin-roles.component';

const routes: Routes = [
  {
    path: '',
    component: AddAdminRolesComponent
  }
]

@NgModule({
  declarations: [
    AddAdminRolesComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    FormsModule,
    FontAwesomeModule,
    PageLabelModule
  ]
})
export class AddAdminRolesModule { }
