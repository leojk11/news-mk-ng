import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { environment } from 'src/environments/environment';
import { faTrashAlt, faEdit } from '@fortawesome/free-solid-svg-icons';
import { PostsService } from 'src/app/features/back/services/posts.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.scss']
})
export class SinglePostComponent implements OnInit {

  @Input() post: any;
  @Output() deleteClicked = new EventEmitter<any>();

  apiUrl = environment.apiUrl;

  editIcon = faEdit;
  deleteIcon = faTrashAlt;

  primary: boolean;

  constructor(
    private postsService: PostsService,
    private toast: ToastrService
  ) { }

  ngOnInit() {
    this.primary = this.post.primary_post;
  }

  showDelete(): void {
    this.deleteClicked.emit(this.post);
  }

  makePrimary(): void {
    this.postsService.makePrimary(this.post._id).subscribe(res => {
      if(res.message === 'primary') {
        this.primary = true;
        this.toast.success('Post has been made primary');
      }
      if(res.message === 'removed') {
        this.primary = false;
        this.toast.success('Post has been removed from primary');
      }

    }, err => {
      this.toast.error(err.error.message);
    })
  }

}
