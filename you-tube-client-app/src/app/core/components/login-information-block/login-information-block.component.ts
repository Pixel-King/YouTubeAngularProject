import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/auth/models/user.model';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-login-information-block',
  templateUrl: './login-information-block.component.html',
  styleUrls: ['./login-information-block.component.scss'],
})
export class LoginInformationBlockComponent implements OnInit {
  userName: User = {
    username: 'Your Name',
    password: '',
    jwtToken: 'asdfasdf',
  };

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.user.subscribe(value => this.userName = value);
    // this.authService.getUserName();
  }
}
