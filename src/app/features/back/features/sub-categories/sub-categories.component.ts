import { Component, OnInit } from '@angular/core';
import { fadeIn } from 'src/app/shared/animations/fadeInOut';
import { SubCategory, SubCategoryService } from '../../services/sub-category.service';

@Component({
  selector: 'app-sub-categories',
  templateUrl: './sub-categories.component.html',
  styleUrls: ['./sub-categories.component.scss'],
  animations: [ fadeIn ]
})
export class SubCategoriesComponent implements OnInit {

  subCategories: SubCategory[] = [];
  clickedSubCategory: SubCategory = {} as SubCategory;

  showModal: boolean = false;

  constructor(
    private subCategoiesService: SubCategoryService
  ) { }

  ngOnInit() {
    this.subCategoiesService.getSubCategories().subscribe(res => {
      this.subCategories = res.subCats;
    })
  }

  toggleModal(): void {
    this.showModal = !this.showModal;
  }

  addClickedCategory(event: any) {
    this.clickedSubCategory = event;
    this.showModal = !this.showModal;
  }

}
