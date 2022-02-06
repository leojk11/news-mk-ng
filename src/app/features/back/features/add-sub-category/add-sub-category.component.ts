import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { Category, CategoryService } from '../../services/category.service';
import { SubCategoryService } from '../../services/sub-category.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-sub-category',
  templateUrl: './add-sub-category.component.html',
  styleUrls: ['./add-sub-category.component.scss']
})
export class AddSubCategoryComponent implements OnInit {

  categories: Category[] = [];

  form: FormGroup = this.fb.group({
    category: ['', [ Validators.required ]],
    sub_cat: ['', [ Validators.required ]]
  })

  addIcon = faPlusCircle;
  category: any;
  chosenCategory = false;
  submitted = false;

  constructor(
    private fb: FormBuilder,
    private categoryService: CategoryService,
    private subCategoryService: SubCategoryService,
    private toast: ToastrService,
    private router: Router
  ) { }

  ngOnInit() {
    this.categoryService.getCategories().subscribe(res => {
      this.categories = res.categories;

      this.form.patchValue({
        category: res.categories[0].name
      })
    })
  }

  chooseCategory(event: any): void {
    console.log(event);
  }

  handleSubmit(): void {
    this.submitted = true;

    this.form.patchValue({
      cateogry: this.category
    })

    if(this.form.invalid) {
      this.form.markAllAsTouched();
      this.toast.error('Form is not valid, please check it again');

      return;
    } 
    console.log(this.form.value);
    // else {
    //   this.subCategoryService.addSubCategory(this.form.value).subscribe(res => {
    //     this.toast.success('Sub category has been added');
    //     this.router.navigateByUrl('/back/sub-categories');
    //   }, err => { 
    //     this.toast.error(err.error.message);
    //   })
    // }
  }

  isInvalid(form: FormGroup, control: string): boolean {
    if(this.submitted && form.get(control)?.errors) {
      return true as boolean;
    } else {
      return false as boolean;
    }
  }

}
