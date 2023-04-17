import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent {
  // user: User;

  username: string;

  password: string;
  // loginForm: FormGroup;

  // errorMessage: string;

  constructor(
    // private fb: FormBuilder,
    // private router: Router,
    private loginService: AuthService,
  ) { }

  // ngOnInit() {
  //   this.loginForm = this.fb.group({
  //     email: ['', Validators.required],
  //     password: ['', Validators.required],
  //   });
  // }

  onSubmit() {
    this.loginService.login({ username: this.username, password: this.password, jwtToken: '' });
  }
}
