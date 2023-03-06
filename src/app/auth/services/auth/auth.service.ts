import { Injectable } from '@angular/core';
import { BehaviorSubject, tap } from 'rxjs';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { SessionStorageService } from "../session-storage/session-storage.service";
import { User } from '../../../models/user';
import { LoginResult, RegisterResult } from "../../../models/authApiResults";
import { environment } from "../../../../environments/environment";

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private loginUrl = '/login';
    private redirectUrl = '/courses';
    private isAuthorized$$ = new BehaviorSubject(!!this.sessionStorageService.getToken());
    public isAuthorized$ = this.isAuthorized$$.asObservable();

    constructor(private http: HttpClient, private sessionStorageService: SessionStorageService) { }

    login(user: User) {
        return this.http.post<LoginResult>(`${environment.apiURL}/login`, user)
            .pipe(
                tap(res => {
                    if (res.successful) {
                        const token = res.result.replace('Bearer ', '');
                        this.sessionStorageService.setToken(token);
                        this.isAuthorized$$.next(true);
                    } else {
                        console.log('Auth is failed');
                    }
                }));
    }

    logout() {
        const authorization = this.sessionStorageService.getToken();

        const headers = new HttpHeaders()
            .set('authorization', `Bearer ${authorization}`);

        return this.http.delete(`${environment.apiURL}/logout`, { headers })
            .pipe(
                tap(() => {
                    this.sessionStorageService.deleteToken();
                    this.isAuthorized$$.next(false);

                })
            );
    }

    register(user: User) {
        return this.http.post<RegisterResult>(`${environment.apiURL}/register`, user);
    }

    get isAuthorised() {
        return this.isAuthorized$$.getValue();
    }

    getLoginUrl() {
        return this.loginUrl;
    }

    getRedirectUrl() {
        return this.redirectUrl;
    }
}