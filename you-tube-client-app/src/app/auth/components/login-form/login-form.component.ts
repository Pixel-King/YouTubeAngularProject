import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent implements OnInit {
  loginForm: FormGroup;

  // errorMessage: string;

  constructor(
    private formBuilder: FormBuilder,
    // private router: Router,
    private loginService: AuthService,
  ) { }

  get email() {return this.loginForm.get('email');}

  get password() {return this.loginForm.get('password');}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, this.passwordValidator]],
    });
  }

  onSubmit() {
    if (this.loginForm.get('password')?.valid && this.loginForm.get('email')?.valid) {
      this.loginService.login({
        username: this.loginForm.get('email')?.value,
        password: this.loginForm.get('password')?.value,
        jwtToken: '',
      });
    }
  }

  passwordValidator(form: FormControl): { [key: string]: boolean } | null {
    const value = form.value;
    if (!value) {
      return null;
    }
    const hasNumber = /[0-9]/.test(value);
    const hasUpper = /[A-Z]/.test(value);
    const hasLower = /[a-z]/.test(value);
    const hasSpecial = /[!@#?]/.test(value);
    const hasEnoughLength = value.length >= 8;
    const valid = hasNumber && hasUpper && hasLower && hasSpecial && hasEnoughLength;
    return valid ? null : { password: true };
  }
}
