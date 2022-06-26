import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/core/user.service';
import { emailValidator } from '../util';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  errorMessage: string = '';

  loginFormGroup: UntypedFormGroup = this.formBuilder.group({
    email: new UntypedFormControl(null, [Validators.required, emailValidator]),
    password: new UntypedFormControl(null, [Validators.required, Validators.minLength(5)])
  });

  constructor(
    private formBuilder: UntypedFormBuilder,
    private userService: UserService,
    private router: Router) { }

  ngOnInit(): void {
  }

  loginHandler(): void {
    // TODO stoimenovg: validate user's data.
    // this.userService.login();
    // this.router.navigate(['/home']);

    console.log('form is submitted', this.loginFormGroup);
  }

  handleLogin(): void {
    this.errorMessage = '';
    this.userService.login$(this.loginFormGroup.value).subscribe({
      next: user => {
        console.log(user);
        this.router.navigate(['/home']);
      },
      complete: () => {
        console.log('login stream completed')
      },
      error: (err) => {
        this.errorMessage = err.error.message;
      }
    });
  }
}