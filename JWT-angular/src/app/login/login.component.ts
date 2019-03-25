
import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userLoginForm: FormGroup;
  invalidCredentials: string;

  constructor( private localStorage: AuthService, private fb: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.invalidCredentials = null;

    this.userLoginForm = this.fb.group({
      userName: ['', [Validators.required, Validators.minLength(6)]],
      email: ['', [Validators.required, Validators.minLength(6), Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });

  }

  get f() { return this.userLoginForm.controls; }

  checkValidUser(): void {
    this.invalidCredentials = null;
    if ( this.userLoginForm.valid && this.userLoginForm.dirty) {
      if ( this.localStorage.CheckUserCredentials(this.userLoginForm)) {
        this.router.navigate(['/home']);
      } else {
        this.invalidCredentials = 'Invalid Login Crendentials';
      }
    }
  }
}
