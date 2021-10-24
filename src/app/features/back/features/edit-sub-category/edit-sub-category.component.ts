import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SubCategory, SubCategoryService } from '../../services/sub-category.service';
import { ToastrService } from 'ngx-toastr';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { Category, CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-edit-sub-category',
  templateUrl: './edit-sub-category.component.html',
  styleUrls: ['./edit-sub-category.component.scss']
})
export class EditSubCategoryComponent implements OnInit {

  subCategory: SubCategory = {} as SubCategory;
  categories: Category[] = [];

  form: FormGroup = this.fb.group({
    category: ['', [ Validators.required ]],
    sub_cat: ['', [ Validators.required ]]
  })

  submitted: boolean = false;
  editIcon = faEdit;

  constructor(
    private route: ActivatedRoute,
    private subCategoriesService: SubCategoryService,
    private fb: FormBuilder,
    private toast: ToastrService,
    private router: Router,
    private categoriesService: CategoryService
  ) { }

  ngOnInit() {
    this.categoriesService.getCategories().subscribe(res => {
      this.categories = res.categories;
    })
    this.route.params.subscribe(params => {
      this.subCategoriesService.getSingleSubCategory(params.id).subscribe(res => {
        this.subCategory = res.subCategory[0];

        this.form.patchValue({
          category: res.subCategory[0].category,
          sub_cat: res.subCategory[0].sub_cat
        })
        // this.subCategoriesService.getSubCategoriesFromCategory(res.subCategory[0].category).subscribe(res => {
        //   console.log(res);
        // })
      })
    })
  }

  handleSubmit() {
    this.submitted = true;

    if(this.form.invalid) {
      this.form.markAllAsTouched();
      this.toast.error('Form is not valid, please check it again');

      return;
    } else {
      this.subCategoriesService.editSubCategory(this.subCategory._id, this.form.value).subscribe(res => {
        this.toast.success('Sub category has been edited');
        this.router.navigateByUrl('/back/sub-categories');
      }, err => {
        this.toast.error(err.error.message);
      })
    }
  }

  chooseCategory(event: any): void {
    console.log(event);
  }

  isInvalid(form: FormGroup, control: string): boolean {
    if(this.submitted && form.get(control)?.errors) {
      return true as boolean;
    } else {
      return false as boolean;
    }
  }

}
