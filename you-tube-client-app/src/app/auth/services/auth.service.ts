import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public user = new Subject<User>();

  private isLoggedIn: Boolean = false;

  constructor(private router: Router) {}

  login(user: User): void {
    if (user.username && user.password) {
      user = { ...user, jwtToken: 'XXXadfa13A-dfas@31342313-%%aadf%%adf' };
      this.user.next({ ...user, jwtToken: 'XXXadfa13A-dfas@31342313-%%aadf%%adf' });
      localStorage.setItem('user', JSON.stringify(user));
      this.isLoggedIn = true;
      this.router.navigate(['']);
    }
  }

  initLogin() {
    const localStoreUser = localStorage.getItem('user');
    if (localStoreUser) {
      const user: User = JSON.parse(localStoreUser);
      console.log(user);
      this.user.next(user);
      this.isLoggedIn = true;
    }
  }

  logOut() {
    this.user.next({ username: 'Your name', password: '', jwtToken: '' });
    localStorage.removeItem('user');
    this.isLoggedIn = false;
  }

  getLogStatus():Boolean {
    return this.isLoggedIn;
  }
}
