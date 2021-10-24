import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

export interface Category {
  _id?: string;
  name: string;
  date_added?: string;
  time_added?: string;
  position?: number;
  posts?: number;
  views?: number;
}
export interface CategoryResponse {
  categories?: Category[];
  category?: Category[];
}
export interface EditCategoryResponse {
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  apiUrl = environment.apiUrl;

  constructor(
    private http: HttpClient
  ) { }

  getCategories(): Observable<any> {
    const path = `${ this.apiUrl }/admins/categories`;
    return this.http.get<any>(path);
  }

  getSingleCategory(id: string): Observable<CategoryResponse> {
    const path = `${ this.apiUrl }/admins/single-cat?catId=${ id }`;
    return this.http.get<CategoryResponse>(path);
  }

  addCategory(category: string): Observable<any> {
    const path = `${ this.apiUrl }/admins/new-cat`;
    return this.http.post<any>(path, category);
  }

  editCategory(id: string, categoryName: string): Observable<EditCategoryResponse> {
    const path = `${ this.apiUrl }/admins/edit-cat?catId=${ id }`;
    const data = { name: categoryName };
    return this.http.patch<EditCategoryResponse>(path, data);
  }

  deleteCategory(id: string): Observable<EditCategoryResponse> {
    const path = `${ this.apiUrl }/admins/delete-cat?catId=${ id }`;
    return this.http.delete<EditCategoryResponse>(path);
  }

}
