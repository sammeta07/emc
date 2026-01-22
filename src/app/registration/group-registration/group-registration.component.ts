import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators,FormGroup } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { GroupRegistrationService } from './group-registration.service';
import { CustomValidators } from '../../shared/validators/password-validator';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-group-registration',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterLink,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule
  ],
  templateUrl: './group-registration.component.html',
  styleUrl: './group-registration.component.css',
})
export class GroupRegistrationComponent {
  groupRegistrationForm: FormGroup;
    hidePassword = true;
    hideConfirmPassword = true;
    
    constructor(
      private fb: FormBuilder,
      private groupRegistrationService: GroupRegistrationService,
    ) {
      this.groupRegistrationForm = this.fb.group({
        groupName: ['', [Validators.required, Validators.minLength(3)]],
        groupEmail: ['', [Validators.required, Validators.email]],
        groupMobile: ['', [Validators.required,]],
        groupPassword: ['', [Validators.required]],
        groupConfirmPassword: ['', [Validators.required]],
        groupLocation: ['', [Validators.required]],
        }, { 
        validators: CustomValidators.passwordMatch 
      });
    }
  
    onSubmit() {
      console.log(this.groupRegistrationForm.value);
      if (this.groupRegistrationForm.valid) {
        this.groupRegistrationService.groupCreate(this.groupRegistrationForm.value).subscribe({
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
