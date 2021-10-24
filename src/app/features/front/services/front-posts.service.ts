import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from 'src/app/core/models/Post';
import { API_URL } from 'src/app/core/tokens/api.token';

@Injectable({
  providedIn: 'root'
})
export class FrontPostsService {

  constructor(
    @Inject(API_URL) private apiUrl: string,
    private http: HttpClient
  ) { }

  getPrimaryPost(): Observable<Post> {
    const path = `${ this.apiUrl }/users/posts/primary`;
    return this.http.get<Post>(path);
  }

  getLastPosts(limit: number): Observable<Post[]> {
    const path = `${ this.apiUrl }/users/posts/last?limit=${ limit }`;
    return this.http.get<Post[]>(path);
  }

  getSinglePost(id: string): Observable<Post> {
    const path = `${ this.apiUrl }/users/posts/${ id }`;
    return this.http.get<Post>(path);
  }

  getPostsByCategory(id: string, limit: number): Observable<Post[]> {
    const path = `${ this.apiUrl }/users/posts/category/${ id }?limit=${ limit }`;
    return this.http.get<Post[]>(path);
  }

  getPostsByViews(limit: number): Observable<Post[]> {
    const path = `${ this.apiUrl }/users/posts/views?limit=${ limit }`;
    return this.http.get<Post[]>(path);
  }

  countPostViews(id: string): Observable<any> {
    const path = `${ this.apiUrl }/users/posts/views/${ id }`;
    return this.http.patch<any>(path, {});
  }


}
