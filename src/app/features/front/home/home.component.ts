import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { take } from 'rxjs/operators';
import { FrontPostsService } from '../services/front-posts.service';
import { Post } from 'src/app/core/models/Post';
import { FrontCategoriesService } from '../services/front-categories.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  bigPost: Post = {} as Post;

  recentPosts: Post[] = [];
  mostViewedPosts: Post[] = [];
  categories: any[] = [];

  constructor(
    private postsService: FrontPostsService,
    private categoriesService: FrontCategoriesService,
    private title: Title
  ) { }

  ngOnInit(): void {
    this.postsService.getPrimaryPost().pipe(take(1)).subscribe(res => {
      this.bigPost = res;
    });
    this.postsService.getLastPosts(2).subscribe(res => {
      this.recentPosts = res;
    });
    this.postsService.getPostsByViews(6).subscribe(res => {
      this.mostViewedPosts = res;
    });
    this.categoriesService.getCategoriesWithPosts(3).subscribe(res => {
      this.categories = res;
    });

    this.title.setTitle('Насловна')
  }
}
