import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { Category, CategoryService } from '../../services/category.service';
import { PostsService } from '../../services/posts.service';
import { SubCategory, SubCategoryService } from '../../services/sub-category.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss']
})
export class AddPostComponent implements OnInit {

  categories: Category[] = [];
  subCategories: SubCategory[] = [];

  form: FormGroup = this.fb.group({
    title: ['', [ Validators.required ]],
    smallTitle: ['', [ Validators.required ]],
    text: ['', [ Validators.required ]],
    category: ['', [ Validators.required ]],
    subCat: ['', [ Validators.required ]],
    source: ['', [ Validators.required ]],
    image: ['', [ Validators.required ]]
  })

  submitted: boolean = false;

  addIcon = faPlusCircle;
  showSub = false;

  message: string = '';
  imagePath: any;
  imgURL: any;

  fileName: string = '';
  fileToUpload: File | null = null;
  chosenImage: boolean = false;

  constructor(
    private fb: FormBuilder,
    private categoryService: CategoryService,
    private subCategoryService: SubCategoryService,
    private postsService: PostsService,
    private toast: ToastrService,
    private router: Router
  ) { }

  ngOnInit() {
    this.categoryService.getCategories().subscribe(res => {
      this.categories = res.categories;
    })
  }

  handleSubmit(): void {
    this.submitted = true;

    if(this.form.invalid) {
      this.form.markAllAsTouched();
      this.toast.error('Form invalid, please check it again');

      return;
    } else {
      this.postsService.uploadImage(this.fileToUpload).subscribe(res => {
        this.form.value.image = this.fileName;
  
        this.postsService.addPost(this.form.value).subscribe(res => {
          this.toast.success('New post has been added');
          this.router.navigateByUrl('/back/posts');
        }, err => {
          this.toast.error('Something went wrong!');
        })
      }, err => {
        this.toast.error('Something went wrong!');
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

  onChange(event: any): void {
    console.log('event', event);
    this.subCategoryService.getSubCategoriesFromCategory(event).subscribe(res => {
      console.log('sub cats res', res);
      if(res.length > 0) {
        this.showSub = true;
        this.subCategories = res;
      } else if(res.length === 0) {
        this.showSub = false;
      }
    })
  }

  preview(files) {
    if (files.length === 0)
      return;
 
    var mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      this.message = "Only images are supported.";
      return;
    }

    this.fileName = files[0].name;
    // this.form.patchValue({ image: files[0].image });
    this.fileToUpload = files[0];

    var reader = new FileReader();
    this.imagePath = files;
    reader.readAsDataURL(files[0]); 
    reader.onload = (_event) => { 
      this.imgURL = reader.result; 
    }
    this.chosenImage = true;
  }
}
