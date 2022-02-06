import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { API_URL } from '../tokens/api.token';
import { StorageService } from './storage.service';
import { distinctUntilChanged, pluck, take, tap } from 'rxjs/operators';
import { Router } from '@angular/router';

export interface AuthState extends Partial<any> { }

const initialState: AuthState = {};
const currentAuthUser = 'currentUser';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private auth = new BehaviorSubject<AuthState>(this.localStorageAuthState ?? initialState);
  public readonly auth$ = this.auth.asObservable().pipe(distinctUntilChanged());

  user$: Observable<any | undefined> = this.auth$.pipe(pluck('user'));

  get state(): AuthState {
    return this.auth.getValue();
  }

  get isLoggedIn(): boolean {
    return !!this.state?.id;
  }

  constructor(
    @Inject(API_URL) private apiUrl: string,
    private http: HttpClient,
    private storageService: StorageService,
    private router: Router
  ) { }

  adminLogin(payload: { email: string, password: string }): Observable<any> {
    const path = `${ this.apiUrl }/admins/login`;
    return this.http.post<any>(path, payload).pipe(
      tap(res => {
        this.setAuthData(res.userData);
        localStorage.setItem(currentAuthUser, JSON.stringify(res.userData));
        // this.storageService.setItem(currentAuthUser, JSON.stringify(res.userData));
      })
    )
  }

  logout(): void {
    this.setAuthData(null);
    localStorage.removeItem(currentAuthUser);
    // this.storageService.removeItem(currentAuthUser);
    this.router.navigateByUrl('/back/login').then();
  }

  private setAuthData(authData: any | null): void {
    if (authData) {
      this.auth.next({ ...authData });
    } else {
      this.auth.next({});
    }
  }

  private get localStorageAuthState(): AuthState | undefined {
    const local = localStorage.getItem(currentAuthUser);
    if (local) {
      return JSON.parse(local) as any;
    }
    return undefined;
  }

}
