import { Component, OnInit } from '@angular/core';
import { CategoryService, Category } from '../../services/category.service';
import { fadeIn } from 'src/app/shared/animations/fadeInOut';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
  animations: [fadeIn]
})
export class CategoriesComponent implements OnInit {

  categories: any[] = [];

  clickedCategory: Category = {} as Category;

  showModal = false;

  constructor(
    private categoryService: CategoryService
  ) { }

  ngOnInit() {
    this.categoryService.getCategories().subscribe(res => {
      console.log(res);
      this.categories = res.categories;
      console.log('this.categories', this.categories);
    })
  }

  toggleModal(event: any) {
    this.showModal = !this.showModal;
  }

  addClickedCategory(event: any) {
    this.clickedCategory = event;
    this.showModal = !this.showModal;
  }
}
