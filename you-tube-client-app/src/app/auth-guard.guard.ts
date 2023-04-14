import { Injectable } from '@angular/core';
import { AuthService } from './auth/services/auth.service';
import { Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

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
    if (!this.authService.getLogStatus()) {
      this.router.navigate(['/auth/login']);
      return false;
    }
    // logged in, so return true
    return true;
  }
}
