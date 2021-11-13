import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from 'src/app/core/models/Post';
import { FrontCategoriesService } from '../services/front-categories.service';
import { FrontPostsService } from '../services/front-posts.service';
import { API_URL } from 'src/app/core/tokens/api.token';
import { Title } from '@angular/platform-browser';
import { Category } from 'src/app/core/models/Category';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  category: Category = {} as Category;
  primaryPost: Post = {} as Post;
  categoryPosts: Post[] = [];
  recentPosts: Post[] = [];
  randomPost: Post = {} as Post;
  lastTwo: Post[] = [];

  constructor(
    @Inject(API_URL) public apiUrl: string,
    private route: ActivatedRoute,
    private router: Router,
    private categoriesService: FrontCategoriesService,
    private postsService: FrontPostsService,
    private title: Title
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if(params.id) {
        this.categoriesService.getSingleCategory(params.id).subscribe(res => {
          if(res.posts.length < 1) {
            this.router.navigateByUrl('/home');
          } else {
            this.category = res.category;
            this.title.setTitle('Категорија:' + ' ' + this.category.name)
            this.primaryPost = res.primaryPost;
            this.categoryPosts = res.posts;
  
            let post = res.posts[Math.floor(Math.random()*res.posts.length)];
            if(post._id === res.primaryPost._id) {
              post = res.posts[Math.floor(Math.random()*res.posts.length)]
            }
            this.randomPost = post;
            this.lastTwo = res.posts.slice(0, 2);
          }
        })
        this.postsService.getLastPosts(5).subscribe(res => {
          this.recentPosts = res;
        })
      } else {
        this.router.navigateByUrl('/home');
      }
    })
  }
}
