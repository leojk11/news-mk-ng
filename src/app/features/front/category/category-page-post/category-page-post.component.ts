import { Component, Inject, Input, OnInit } from '@angular/core';
import { Post } from 'src/app/core/models/Post';
import { API_URL } from 'src/app/core/tokens/api.token';

@Component({
  selector: 'app-category-page-post',
  templateUrl: './category-page-post.component.html',
  styleUrls: ['./category-page-post.component.scss']
})
export class CategoryPagePostComponent implements OnInit {

  @Input() post: Post;

  constructor(
    @Inject(API_URL) public apiUrl: string,
  ) { }

  ngOnInit() {
  }

}
