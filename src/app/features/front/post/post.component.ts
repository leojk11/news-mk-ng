import { Component, Inject, OnInit } from '@angular/core';
import { Post } from 'src/app/core/models/Post';
import { faCalendarAlt, faClock, faEye } from '@fortawesome/free-solid-svg-icons';
import { FrontPostsService } from '../services/front-posts.service';
import { ActivatedRoute, Router } from '@angular/router';
import { take } from 'rxjs/operators';
import { API_URL } from 'src/app/core/tokens/api.token';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  recentPosts: Post[] = [];
  post: Post = {} as Post;
  categoryPosts: Post[] = [];
  maybeInterested: Post[] = [];

  calendarIcon = faCalendarAlt;
  clockIcon = faClock;
  eyeIcon = faEye;

  constructor(
    @Inject(API_URL) public apiUrl,
    private postsService: FrontPostsService,
    private route: ActivatedRoute,
    private router: Router,
    private title: Title
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if(params.id) {
        this.postsService.getSinglePost(params.id).pipe(take(1)).subscribe(singlePost => {
          this.post = singlePost;

          this.title.setTitle(this.post.title);

          this.postsService.countPostViews(singlePost._id).subscribe(res => {
            console.log('+1');
          })

          this.postsService.getPostsByCategory(singlePost.category_id, 3).subscribe(categoryPosts => {
            this.categoryPosts = categoryPosts;
          })
        })
      } else {
        this.router.navigateByUrl('/home');
      }
    })

    this.postsService.getLastPosts(5).subscribe(lastPosts => {
      this.recentPosts = lastPosts;
    })
  }

}
