import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { SubCategory } from 'src/app/features/back/services/sub-category.service';

@Component({
  selector: 'app-sub-category',
  templateUrl: './sub-category.component.html',
  styleUrls: ['./sub-category.component.scss']
})
export class SubCategoryComponent implements OnInit {

  @Input() subCategory: SubCategory;
  @Output() deleteCategoryClicked = new EventEmitter<any>();

  deleteIcon = faTrashAlt;
  editIcon = faEdit;

  constructor() { }

  ngOnInit() {
  }

  deleteCategory() {
    this.deleteCategoryClicked.emit(this.subCategory);
  }

}
