import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { MaterialModule } from '../shared/material-module';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink, MaterialModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  protected readonly submitted = signal(false);

  protected form!: any;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  protected onSubmit(): void {
    this.submitted.set(true);
    if (this.form.valid) {
      // eslint-disable-next-line no-console
      console.log('Login attempt:', this.form.value);
    }
  }

  protected control(name: string) {
    return this.form.get(name);
  }
}
