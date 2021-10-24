import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  apiUrl = environment.apiUrl;

  constructor(
    private http: HttpClient
  ) { }

  getPosts(pageSize?: number, total?: number): Observable<any> {
    const path = `${ this.apiUrl }/admins/posts?pageSize=${ pageSize }&offset=${ total }`;
    return this.http.get(path);
  }

  getSinglePost(id: string): Observable<any> {
    const path = `${ this.apiUrl }/admins/posts/${ id }`;
    return this.http.get<any>(path);
  }

  uploadImage(file: File) {
    const path = `${ this.apiUrl }/post-image`;
    const formData: FormData = new FormData();
    formData.append('fileToUpload', file, file.name);

    return this.http.post(path, formData)
  }

  addPost(post: any): Observable<any> {
    const path = `${ this.apiUrl }/admins/new-post`;
    return this.http.post<any>(path, post);
  }

  editPost(id: string, post: any): Observable<any> {
    const path = `${ this.apiUrl }/admins/posts/${ id }`;
    return this.http.patch<any>(path, post);
  }

  makePrimary(id: string): Observable<any> {
    const path = `${ this.apiUrl }/admins/posts/primary/${ id }`;
    return this.http.get<any>(path);
  }

  deletePost(id: string): Observable<any> {
    const path = `${ this.apiUrl }/admins/posts/${ id }`;
    return this.http.delete<any>(path);
  }
}
