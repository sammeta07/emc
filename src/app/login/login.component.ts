import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { MaterialModule } from '../shared/design/material-module';
import { Login } from './login';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink, MaterialModule,],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  
  loginForm: FormGroup;


  constructor(
    private fb: FormBuilder, 
    private loginService: Login,
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit() {
    console.log(this.loginForm.value);
    if (this.loginForm.valid) {
      this.loginService.postData(this.loginForm.value).subscribe({
        next: (response) => {
          console.log('Login success:', response);
        },
        error: (err) => {
          console.error('Login failed:', err);
        }
      });
    }
  }
}
