import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faBan } from '@fortawesome/free-solid-svg-icons';
import { PostsService } from 'src/app/features/back/services/posts.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delete-post-modal',
  templateUrl: './delete-post-modal.component.html',
  styleUrls: ['./delete-post-modal.component.scss']
})
export class DeletePostModalComponent implements OnInit {

  banIcon = faBan;

  @Input() post: any;
  @Output() cancelClicked = new EventEmitter<any>();

  constructor(
    private postsService: PostsService,
    private toast: ToastrService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  deletePost(): void {
    this.postsService.deletePost(this.post._id).subscribe(res => {
      this.toast.success(`Post has been deleted.`);
      // code below refreshes the page
      let currentUrl = this.router.url;
      this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
        this.router.navigate([currentUrl]);
      });
    }, err => {
      this.toast.error(err.error.message);
    })
  }

  cancelDelete(): void {
    this.cancelClicked.emit();
  }

}
