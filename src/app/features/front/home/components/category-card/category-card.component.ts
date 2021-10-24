// eslint-disable-next-line @typescript-eslint/naming-convention
import { Component, Input, OnInit } from '@angular/core';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';
import { Category } from '../../../services/front-categories.service';

@Component({
  selector: 'app-category-card',
  templateUrl: './category-card.component.html',
  styleUrls: ['./category-card.component.scss']
})
export class CategoryCardComponent implements OnInit {

  @Input() category: any;
  categoryInfo: Category = {} as Category;

  arrowRightIcon = faCaretRight;

  constructor() { }

  ngOnInit(): void {
    console.log('category from cat card comp', this.category);
    if(!!this.category) {
      this.categoryInfo = this.category.category;
    }
  }

}
