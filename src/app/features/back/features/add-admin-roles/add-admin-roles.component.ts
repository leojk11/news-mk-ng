import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from '../../services/admin.service';

@Component({
  selector: 'app-add-admin-roles',
  templateUrl: './add-admin-roles.component.html',
  styleUrls: ['./add-admin-roles.component.scss']
})
export class AddAdminRolesComponent implements OnInit {

  submitted: boolean = false;

  form: FormGroup = this.fb.group({
    admin_role: ['', [ Validators.required ]]
  })

  addIcon = faPlusCircle;

  constructor(
    private fb: FormBuilder,
    private adminService: AdminService,
    private toast: ToastrService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  handleSubmit(): void {
    this.submitted = true;

    if(this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.adminService.addAdminRole(this.form.value).subscribe(res => {
      this.toast.success('Admin role has been added');
      this.router.navigateByUrl('/back/admin-roles');
    }, err => {
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
