import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { CategoryService } from '../../services/category.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss']
})
export class AddCategoryComponent implements OnInit {

  form: FormGroup = this.fb.group({
    title: ['', [ Validators.required ]]
  })

  submitted = false;
  addIcon = faPlusCircle;

  constructor(
    private fb: FormBuilder,
    private categoryService: CategoryService,
    private toast: ToastrService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  handleSubmit(): void {
    console.log(this.form.value);
    this.categoryService.addCategory(this.form.value).subscribe(res => {
      this.toast.success('Category has been added');
      this.router.navigateByUrl('/back/categories');
    }, err => {
      this.toast.error(err.error.message);
    })
    
  }

}
