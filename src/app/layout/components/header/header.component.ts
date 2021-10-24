import { Component, OnInit } from '@angular/core';
import { faUser, faBars, faSearch } from '@fortawesome/free-solid-svg-icons';
import { Category } from 'src/app/features/back/services/category.service';
import { FrontCategoriesService } from 'src/app/features/front/services/front-categories.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  userIcon = faUser;
  menuIcon = faBars;
  searchIcon = faSearch;

  categories: Category[] = [];

  constructor(
    private categoriesService: FrontCategoriesService
  ) { }

  ngOnInit(): void {
    this.categoriesService.getCategories().subscribe(res => {
      this.categories = res;
      console.log('categories', this.categories);
    })
  }

}
