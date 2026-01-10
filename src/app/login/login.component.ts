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
  
  groupLoginForm: FormGroup;
  hidePassword = true;

  constructor(
    private fb: FormBuilder, 
    private loginService: Login,
  ) {
    this.groupLoginForm = this.fb.group({
      groupEmail: ['', [Validators.required, Validators.email]],
      groupPassword: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit() {
    console.log(this.groupLoginForm.value);
    if (this.groupLoginForm.valid) {
      this.loginService.groupLogin(this.groupLoginForm.value).subscribe({
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
