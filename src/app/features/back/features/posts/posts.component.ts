import { Component, OnInit } from '@angular/core';
import { fadeIn } from 'src/app/shared/animations/fadeInOut';
import { PostsService } from '../../services/posts.service';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
  animations: [fadeIn]
})
export class PostsComponent implements OnInit {

  searchIcon = faSearch;

  posts: any[] = [];
  clickedPost: any = {} as any;

  showModal: boolean = false;

  showMessage: boolean = false;
  message: string = 'No posts have been found';

  total: number;
  page: number = 1;
  loaded: boolean = false;

  searchForm: FormGroup = this.fb.group({
    search: ['']
  })

  constructor(
    private postsService: PostsService,
    private fb: FormBuilder,
    private toast: ToastrService
  ) { }

  ngOnInit() {
    // this.posts = [];
    this.postsService.getPosts().subscribe(res => {
      this.posts = res.posts;
      this.total = res.posts.length;

      if(res.posts.length < 1) {
        this.showMessage = true;
      }
    })
  }

  toggleModal(): void {
    this.showModal = !this.showModal;
  }

  toggleModalDelete(event: any): void {
    this.clickedPost = event;
    this.toggleModal();
  }

  search(): void {
    this.postsService.searchPosts(this.searchForm.value.search).subscribe(res => {
      if(res.length > 0) {
        console.log(res);
        this.posts = [];
        this.posts = res;
  
        this.page = 1;
        this.total = res.length;
      } else {
        this.toast.error('No posts have been found');
        this.postsService.getPosts().subscribe(response => {
          console.log('response', response);
          this.posts = [];
          this.posts = response.posts;

          this.page = 1;
          this.total = response.posts.length;
        })
      }
    }, err => {
      this.toast.error(err.error.message);
    })
  }
}
