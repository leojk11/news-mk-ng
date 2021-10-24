import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Category, CategoryService } from '../../services/category.service';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.scss']
})
export class EditCategoryComponent implements OnInit {

  category: Category = {} as Category;

  editIcon = faEdit;

  form: FormGroup = this.fb.group({
    name: ['', [ Validators.required ]]
  })

  constructor(
    private categoryService: CategoryService,
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private toast: ToastrService,
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.categoryService.getSingleCategory(params.id).subscribe(res => {
        this.category = res.category[0];
        this.form.patchValue({
          name: res.category[0].name
        })
      })
    })
  }

  handleSubmit(): void {
    const { name } = this.form.value;

    this.categoryService.editCategory(this.category._id, name).subscribe(res => {
      this.toast.success(res.message);
      this.router.navigateByUrl('back/categories');
    }, err => {
      this.toast.error(err.error.message);
    })
  }
}
