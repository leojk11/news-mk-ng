import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faBan } from '@fortawesome/free-solid-svg-icons';
import { SubCategory, SubCategoryService } from 'src/app/features/back/services/sub-category.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delete-sub-category-modal',
  templateUrl: './delete-sub-category-modal.component.html',
  styleUrls: ['./delete-sub-category-modal.component.scss']
})
export class DeleteSubCategoryModalComponent implements OnInit {

  banIcon = faBan;

  @Input() subCategory: SubCategory;
  @Output() cancelClicked = new EventEmitter<any>();

  constructor(
    private subCategoryService: SubCategoryService,
    private toast: ToastrService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  deleteCategory() {
    this.subCategoryService.deleteSubCategory(this.subCategory._id).subscribe(res => {
      this.toast.success(`Sub category ${this.subCategory.sub_cat} has been deleted.`);
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
