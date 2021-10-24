import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faBan } from '@fortawesome/free-solid-svg-icons';
import { Category, CategoryService } from 'src/app/features/back/services/category.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delete-modal',
  templateUrl: './delete-modal.component.html',
  styleUrls: ['./delete-modal.component.scss']
})
export class DeleteModalComponent implements OnInit {

  banIcon = faBan;

  @Input() category: Category;
  @Output() cancelClicked = new EventEmitter<any>();

  constructor(
    private categoryService: CategoryService,
    private toast: ToastrService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  deleteCategory() {
    this.categoryService.deleteCategory(this.category._id).subscribe(res => {
      this.toast.success(`Category ${this.category.name} has been deleted.`);
      // code below refreshes the page
      let currentUrl = this.router.url;
      this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
        this.router.navigate([currentUrl]);
      });
    }, err => {
      this.toast.error(err.error.message);
    });
  }

  cancelDelete() {
    this.cancelClicked.emit();
  }

}
