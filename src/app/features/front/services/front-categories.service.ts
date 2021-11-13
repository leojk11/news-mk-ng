import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { faTextHeight } from '@fortawesome/free-solid-svg-icons';
import { Observable } from 'rxjs';
import { API_URL } from 'src/app/core/tokens/api.token';
import { Category } from '../../back/services/category.service';



@Injectable({
  providedIn: 'root'
})
export class FrontCategoriesService {

  constructor(
    @Inject(API_URL) private apiUrl: string,
    private http: HttpClient
  ) { }

  getCategories(): Observable<Category[]> {
    const path = `${ this.apiUrl }/users/categories`;
    return this.http.get<Category[]>(path);
  }

  getSingleCategory(id: string): Observable<any> {
    const path = `${ this.apiUrl }/users/categories/${ id }`;
    return this.http.get<any>(path);
  }

  getCategoriesWithPosts(limit?: number): Observable<any> {
    let path = `${ this.apiUrl }/users/categories/all-posts`;
    if(limit) {
      path = path + `?limit=${ limit }`;
    }
    return this.http.get<any>(path);
  }
}
