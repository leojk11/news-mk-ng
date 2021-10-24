import { Component, Inject, Input, OnInit } from '@angular/core';
import { Post } from 'src/app/core/models/Post';
import { API_URL } from 'src/app/core/tokens/api.token';

@Component({
  selector: 'app-category-post',
  templateUrl: './category-post.component.html',
  styleUrls: ['./category-post.component.scss']
})
export class CategoryPostComponent implements OnInit {

  @Input() post: Post = {} as Post;

  constructor(
    @Inject(API_URL) public apiUrl
  ) { }

  ngOnInit() {
  }

}
