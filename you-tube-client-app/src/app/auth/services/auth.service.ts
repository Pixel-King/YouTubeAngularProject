import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  // public user = new Subject<User>();

  private isLoggedInSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  public isLoggedIn$: Observable<boolean> = this.isLoggedInSubject.asObservable();

  constructor(private router: Router) {}

  login(user: User): void {
    if (user.username && user.password) {
      localStorage.setItem('jwtToken', 'XXXadfa13A-dfas@31342313-%%aadf%%adf');
      this.isLoggedInSubject.next(true);
      this.router.navigate(['']);
    }
  }

  initLogin() {
    const localStoreJwtToken = localStorage.getItem('jwtToken');
    if (localStoreJwtToken) {
      this.isLoggedInSubject.next(true);
    }
  }

  logOut() {
    localStorage.removeItem('jwtToken');
    this.isLoggedInSubject.next(false);
    this.router.navigate(['auth/login']);
  }

  // getLogStatus():Boolean {
  //   return this.isLoggedIn;
  // }
}
