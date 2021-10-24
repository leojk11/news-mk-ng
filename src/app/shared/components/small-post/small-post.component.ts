import { Component, Inject, Input, OnInit } from '@angular/core';
import { Post } from 'src/app/core/models/Post';
import { API_URL } from 'src/app/core/tokens/api.token';

@Component({
  selector: 'app-small-post',
  templateUrl: './small-post.component.html',
  styleUrls: ['./small-post.component.scss']
})
export class SmallPostComponent implements OnInit {

  @Input() smallPost: Post = {} as Post;

  constructor(
    @Inject(API_URL) public apiUrl
  ) { }

  ngOnInit() {
  }

}
