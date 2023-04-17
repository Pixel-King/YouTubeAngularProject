import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-login-information-block',
  templateUrl: './login-information-block.component.html',
  styleUrls: ['./login-information-block.component.scss'],
})
export class LoginInformationBlockComponent implements OnInit {
  isLoggedIn$ = this.authService.isLoggedIn$;

  constructor(
    private authService: AuthService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    console.log(this.isLoggedIn$);
    // this.authService.isLoggedIn$.subscribe((isLog) => this.isLoggedIn = isLog );
  }

  login():void {
    console.log('login');
    this.router.navigate(['auth/login']);
  }

  logout():void {
    console.log('logout');
    this.authService.logOut();
  }
}
