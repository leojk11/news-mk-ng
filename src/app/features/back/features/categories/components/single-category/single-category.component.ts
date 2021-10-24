import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Category } from 'src/app/features/back/services/category.service';
import { faTrashAlt, faEdit } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-single-category',
  templateUrl: './single-category.component.html',
  styleUrls: ['./single-category.component.scss']
})
export class SingleCategoryComponent implements OnInit {

  @Input() category: any;
  @Output() deleteCategoryClicked = new EventEmitter<any>();

  deleteIcon = faTrashAlt;
  editIcon = faEdit;

  constructor() { }

  ngOnInit() {
  }

  deleteCategory() {
    this.deleteCategoryClicked.emit(this.category);
  }

}
