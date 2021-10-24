import { Component, Inject, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from 'src/app/core/models/Post';
import { API_URL } from 'src/app/core/tokens/api.token';

@Component({
  selector: 'app-big-post',
  templateUrl: './big-post.component.html',
  styleUrls: ['./big-post.component.scss']
})
export class BigPostComponent implements OnInit {

  @Input() bigPost: Post;

  constructor(
    @Inject(API_URL) public apiUrl,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  goToCategory(event: any): void {
    event.stopPropagation();
    this.router.navigateByUrl('/category/' + this.bigPost.category_id);
  }

}
