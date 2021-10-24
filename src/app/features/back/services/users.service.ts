import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

export interface AddUserResponse {
  message: string;
}

export interface User {
  firstname: string;
  lastname: string;
  email: string;
  username: string;
  password: string;
  status?: string;
  date_registered?: string;
}

export interface UsersResponse {
  todaysUsers: User[];
  todaysUsersNumb: number;
  users: User[];
  usersNumb: number;
}

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  apiUrl = environment.apiUrl;

  constructor(
    private http: HttpClient
  ) { }

  getUsers(): Observable<UsersResponse> {
    const path = `${ this.apiUrl }/admins/users`;
    return this.http.get<UsersResponse>(path);
  }

  addNewUser(user: User): Observable<AddUserResponse> {
    const path = `${ this.apiUrl }/admins/new-user`;
    return this.http.post<AddUserResponse>(path, user);
  }

}
