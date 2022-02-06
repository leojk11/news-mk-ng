import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { HttpErrorResponse } from '@angular/common/http';
import { handleServerSideValidation } from 'src/app/shared/utils/server-side-validations';
import { take } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup = this.fb.group({
    email: ['', [ Validators.required, Validators.email ]],
    password: ['', [ Validators.required ]]
  })

  submitted: boolean = false;

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private toast: ToastrService,
    private router: Router,
    private title: Title
  ) { }

  ngOnInit() {
    this.title.setTitle('newsMK - CMS')
  }

  handleSubmit() {
    console.log('HANDLE SUBMIT FIRED')
    this.submitted = true;

    if(this.form.invalid) {
      console.log('FORM NOT VALID');
      this.form.markAllAsTouched();
      return;
    }

    this.auth.adminLogin(this.form.value).pipe(take(1))
      .subscribe(res => {
        this.router.navigateByUrl('/back/dashboard').then();
      }, err => {
        this.handleHttpError(err, this.form);
      })
  }

  handleHttpError(error: Error, form: FormGroup): void {
    if (!(error instanceof HttpErrorResponse)) {
      return;
    }

    if (error.status === 401) {
      this.toast.error(error.error.message);
    }

    if (error.status === 500) {
      this.toast.error(error.message);
    }

    const unhandledErrors = handleServerSideValidation(error, form);
    if (unhandledErrors) {
      this.toast.error(error.statusText, unhandledErrors);
    }
  }

}
