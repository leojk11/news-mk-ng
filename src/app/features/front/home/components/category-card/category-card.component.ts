// eslint-disable-next-line @typescript-eslint/naming-convention
import { Component, Input, OnInit } from '@angular/core';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';
import { CategoryPayload } from 'src/app/core/models/Category';
import { Category } from 'src/app/features/back/services/category.service';

@Component({
  selector: 'app-category-card',
  templateUrl: './category-card.component.html',
  styleUrls: ['./category-card.component.scss']
})
export class CategoryCardComponent implements OnInit {

  @Input() category: CategoryPayload;
  categoryInfo: Category = {} as Category;

  arrowRightIcon = faCaretRight;

  show: boolean = false;

  constructor() { }

  ngOnInit(): void {
    if(!!this.category) {
      this.categoryInfo = this.category.category;

      if(this.category.posts.length > 0) {
        this.show = true;
      }
    }
  }
}
