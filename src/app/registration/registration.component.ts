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
  
  groupRegistrationForm: FormGroup;
  hidePassword = true;
  hideConfirmPassword = true;
  
  constructor(
    private fb: FormBuilder,
    private registrationService: Registration,
  ) {
    this.groupRegistrationForm = this.fb.group({
      groupName: ['', [Validators.required, Validators.minLength(3)]],
      groupEmail: ['', [Validators.required, Validators.email]],
      groupMobile: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      groupPassword: ['', [Validators.required]],
      groupConfirmPassword: ['', [Validators.required]]
      }, { 
      validators: CustomValidators.passwordMatch 
    });
  }

  onSubmit() {
    console.log(this.groupRegistrationForm.value);
    if (this.groupRegistrationForm.valid) {
      this.registrationService.groupCreate(this.groupRegistrationForm.value).subscribe({
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
