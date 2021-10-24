import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PostsService } from '../../services/posts.service';
import { ToastrService } from 'ngx-toastr';
import { SubCategory, SubCategoryService } from '../../services/sub-category.service';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { Category, CategoryService } from '../../services/category.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.scss']
})
export class EditPostComponent implements OnInit {

  apiUrl = environment.apiUrl;

  addIcon = faPlusCircle;

  form: FormGroup = this.fb.group({
    title: ['', [ Validators.required ]],
    small_title: ['', [ Validators.required ]],
    source: ['', [ Validators.required ]],
    category: ['', [ Validators.required ]],
    subCat: ['', [ Validators.required ]],
    text: ['', [ Validators.required ]],
    image: ['']
  })

  submitted: boolean = false;

  post: any = {};

  showSub: boolean = false;
  subCategories: SubCategory[] = [];
  categories: Category[] = [];

  message: string = '';
  fileName: string = '';
  fileToUpload: File;
  imagePath;
  imgURL;
  chosenImage: boolean = false;

  constructor(
    private postsService: PostsService,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private toast: ToastrService,
    private subCategoryService: SubCategoryService,
    private categoryService: CategoryService,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.postsService.getSinglePost(params.id).subscribe(res => {
        this.post = res.singlePost[0];

        this.categoryService.getCategories().subscribe(res => {
          this.categories = res.categories;
        })
        this.subCategoryService.getSubCategoriesFromCategory(res.singlePost[0].category).subscribe(subCategries => {
          this.subCategories = subCategries;
        })

        const post = res.singlePost[0];
        const { 
          title, 
          small_title, 
          source,
          category,
          subCat,
          text
        } = post;

        this.form.patchValue({
          title: title,
          small_title: small_title,
          source: source,
          category: category,
          subCat: subCat,
          text: text
        });
        this.imgURL = `${ this.apiUrl }/post-image/${ this.post.image }`;
        this.chosenImage = true;
      })
    })
  }

  handleSubmit(): void {
    this.submitted = true;

    if(this.form.invalid) {
      this.form.markAllAsTouched();
      this.toast.error('Form is not valid, please check it and try again');

      return;
    } else {
      this.form.value.image = this.fileName;
      this.postsService.editPost(this.post._id, this.form.value).subscribe(res => {
        this.toast.success('Post has been edited');
        this.router.navigateByUrl('/back/posts');
      }, err => {
        this.toast.error('Something went wrong');
      })
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
    this.subCategoryService.getSubCategoriesFromCategory(event).subscribe(res => {
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
