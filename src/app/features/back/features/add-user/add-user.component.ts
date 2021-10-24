import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { UsersService } from '../../services/users.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {

  submitted = false;
  passVisibility = 'password';

  form: FormGroup = this.fb.group({
    firstname: ['', [ Validators.required, Validators.minLength(2), Validators.maxLength(64) ]],
    lastname: ['', [ Validators.required, Validators.minLength(2), Validators.maxLength(64) ]],
    email: ['', [ Validators.required, Validators.email ]],
    username: ['', [ Validators.required, Validators.minLength(4), Validators.maxLength(64) ]],
    password: ['', [ Validators.required, Validators.minLength(6), Validators.maxLength(20) ]]
  })

  addIcon = faPlusCircle;

  constructor(
    private fb: FormBuilder,
    private usersService: UsersService,
    private toast: ToastrService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  handleSubmit(): void {
    this.submitted = true;

    if(this.form.invalid) {
      this.form.markAllAsTouched();
      this.toast.error('Form is not valid, please check it again');

      return;
    } else {
      this.usersService.addNewUser(this.form.value).subscribe(res => {
        this.toast.success('User has been added');
        this.router.navigateByUrl('/back/users');
      });
    }
  }

  isInvalid(form: FormGroup, control: string): boolean {
    if(this.submitted && form.get(control)?.errors) {
      return true as boolean;
    } else {
      return false as boolean;
    }
  }

  togglePassword(): void {
    if(this.passVisibility === 'password') {
      this.passVisibility = 'text';
    } else if(this.passVisibility === 'text') {
      this.passVisibility = 'password';
    }
  }
}