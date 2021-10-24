import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

export interface SubCategory {
  _id?: string;
  category: string;
  category_id?: string;
  sub_cat: string;
}
export interface SubCategoryResponse {
  subCats: SubCategory[];
}
export interface SingleSubCategoryResponse {
  subCategory: SubCategory[];
}
export interface AddSubCategoryResponse {
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class SubCategoryService {

  apiUrl = environment.apiUrl;

  constructor(
    private http: HttpClient
  ) { }

  getSubCategories(): Observable<SubCategoryResponse> {
    const path = `${ this.apiUrl }/admins/sub-cats`;
    return this.http.get<SubCategoryResponse>(path);
  }

  getSingleSubCategory(id: string): Observable<SingleSubCategoryResponse> {
    const path = `${ this.apiUrl }/admins/sub-cats/${ id }`;
    return this.http.get<SingleSubCategoryResponse>(path);
  }

  getSubCategoriesFromCategory(category: string): Observable<SubCategory[]> {
    const path = `${ this.apiUrl }/admins/sub-cats-from-cat/${category}`;
    return this.http.get<SubCategory[]>(path);
  }

  addSubCategory(subCategory: SubCategory): Observable<AddSubCategoryResponse> {
    const path = `${ this.apiUrl }/admins/new-sub-cat`;
    return this.http.post<AddSubCategoryResponse>(path, subCategory);
  }

  editSubCategory(id: string, subCategory: SubCategory): Observable<AddSubCategoryResponse> {
    const path = `${ this.apiUrl }/admins/sub-cats/${ id }`;
    return this.http.patch<AddSubCategoryResponse>(path, subCategory);
  }

  deleteSubCategory(id: string): Observable<AddSubCategoryResponse> {
    const path = `${ this.apiUrl }/admins/sub-cats/${ id }`;
    return this.http.delete<AddSubCategoryResponse>(path);
  }
}
