import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { ToastrService } from 'ngx-toastr';
import { AdminRole } from 'src/app/core/models/Admin';
import { AdminService } from '../../../services/admin.service';

@Component({
  templateUrl: './add-admin.component.html'
})
export class AddAdminComponent implements OnInit {

  adminRoles: AdminRole[] = [];

  submitted: boolean = false;

  form: FormGroup = this.fb.group({
    firstname: ['', [ Validators.required ]],
    lastname: ['', [ Validators.required ]],
    email: ['', [ Validators.required, Validators.email ]],
    username: ['', [ Validators.required ]],
    password: ['', [ Validators.required ]],
    admin_role: ['', [ Validators.required ]]
  })

  addIcon = faPlusCircle;

  constructor(
    private fb: FormBuilder,
    private toast: ToastrService,
    private adminService: AdminService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.adminService.getAdminRoles().subscribe(res => {
      this.adminRoles = res;
    })
  }

  handleSubmit(): void {
    this.submitted = true;

    if(this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.adminService.addAdmin(this.form.value).subscribe(res => {
      this.toast.success('Admin has been added');
      this.router.navigateByUrl('/back/admins');
    }, err => {
      console.log(err);
      this.toast.error(err.error.message);
    })

  }

  isInvalid(form: FormGroup, control: string): boolean {
    if(this.submitted && form.get(control)?.errors) {
      return true as boolean;
    } else {
      return false as boolean;
    }
  }

}
