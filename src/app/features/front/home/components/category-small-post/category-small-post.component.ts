import { Component, Inject, Input, OnInit } from '@angular/core';
import { CategoryPost } from 'src/app/core/models/BigPost';
import { API_URL } from 'src/app/core/tokens/api.token';
import { Post } from 'src/app/core/models/Post';

@Component({
  selector: 'app-category-small-post',
  templateUrl: './category-small-post.component.html',
  styleUrls: ['./category-small-post.component.scss']
})
export class CategorySmallPostComponent implements OnInit {

  @Input() post: Post;

  constructor(
    @Inject(API_URL) public apiUrl: string,
  ) { }

  ngOnInit() {
  }

}
