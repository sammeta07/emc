import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators,FormGroup } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { MaterialModule } from '../shared/design/material-module';
import { Registration } from './registration';
import { CustomValidators } from '../shared/validators/password-validator';
@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink, MaterialModule],
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  
  registrationForm: FormGroup;
  hidePassword = true;
  hideConfirmPassword = true;
  
  constructor(
    private fb: FormBuilder,
    private registrationService: Registration,
  ) {
    this.registrationForm = this.fb.group({
      groupName: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      mobile: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      password: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]]
      }, { 
      validators: CustomValidators.passwordMatch 
    });
  }

  onSubmit() {
    console.log(this.registrationForm.value);
    if (this.registrationForm.valid) {
      this.registrationService.createGroup(this.registrationForm.value).subscribe({
        next: (response) => {
          console.log('Registration success:', response);
        },
        error: (err) => {
          console.error('Registration failed:', err);
        }
      });
    }
  }
}
