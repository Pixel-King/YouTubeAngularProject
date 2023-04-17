import { Injectable } from '@angular/core';
import { AuthService } from './auth/services/auth.service';
import { Router, UrlTree } from '@angular/router';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard {


  constructor(private authService: AuthService, private router: Router) { }

  canActivate():
  | Observable<boolean | UrlTree>
  | Promise<boolean | UrlTree>
  | boolean
  | UrlTree {
    return this.authService.isLoggedIn$.pipe(
      tap(isLoggedIn => {
        if (!isLoggedIn) {
          this.router.navigate(['auth/login']);
        }
      }),
    );
  }
}
