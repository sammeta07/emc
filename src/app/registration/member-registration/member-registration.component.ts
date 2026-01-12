import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { MemberRegistrationService } from './member-registration.service';
import { MaterialModule } from '../../shared/design/material-module';
import { CustomValidators } from '../../shared/validators/password-validator';


@Component({
  selector: 'app-member-registration',
  imports: [CommonModule, ReactiveFormsModule, RouterLink, MaterialModule],
  templateUrl: './member-registration.component.html',
  styleUrl: './member-registration.component.css',
})
export class MemberRegistrationComponent {
  memberRegistrationForm: FormGroup;
  hidePassword = true;
  hideConfirmPassword = true;

  constructor(
    private fb: FormBuilder,
    private memberRegistrationService: MemberRegistrationService,
  ) {
    this.memberRegistrationForm = this.fb.group({
      memberName: ['', [Validators.required, Validators.minLength(3)]],
      memberEmail: ['', [Validators.required, Validators.email]],
      memberMobile: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      memberPassword: ['', [Validators.required]],
      memberConfirmPassword: ['', [Validators.required]]
    }, {
      validators: CustomValidators.passwordMatch
    });
  }

  onSubmit() {
    if (this.memberRegistrationForm.valid) {
      this.memberRegistrationService.memberCreate(this.memberRegistrationForm.value).subscribe({
        next: (response) => {
          console.log('Member registration success:', response);
        },
        error: (err) => {
          console.error('Member registration failed:', err);
        }
      });
    }
  }
}
