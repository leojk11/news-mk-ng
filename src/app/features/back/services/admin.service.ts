import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AdminRole, NewAdminPayload } from 'src/app/core/models/Admin';
import { API_URL } from 'src/app/core/tokens/api.token';

export interface AddNewResponse {
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(
    @Inject(API_URL) private apiUrl: string,
    private http: HttpClient
  ) { }

  getAdminRoles(): Observable<AdminRole[]> {
    const path = `${ this.apiUrl }/admins/admins/roles`;
    return this.http.get<AdminRole[]>(path);
  }

  getAdmins(): Observable<any> {
    const path = `${ this.apiUrl }/admins/admins`;
    return this.http.get<any>(path);
  }

  addAdminRole(payload: { admin_role: string }): Observable<AddNewResponse> {
    const path = `${ this.apiUrl }/admins/admins/roles`;
    return this.http.post<AddNewResponse>(path, payload);
  }

  addAdmin(payload: NewAdminPayload): Observable<AddNewResponse> {
    const path = `${ this.apiUrl }/admins/admins`
    return this.http.post<AddNewResponse>(path, payload);
  }
}
