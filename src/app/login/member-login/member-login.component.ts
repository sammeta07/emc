import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { MaterialModule } from '../../shared/design/material-module';
import { MemberLoginService } from './member-login.service';

@Component({
  selector: 'app-member-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink, MaterialModule],
  templateUrl: './member-login.component.html',
  styleUrls: ['./member-login.component.css']
})
export class MemberLoginComponent {
  memberLoginForm: FormGroup;
  hidePassword = true;

  constructor(
    private fb: FormBuilder,
    private memberLoginService: MemberLoginService,
  ) {
    this.memberLoginForm = this.fb.group({
      memberEmail: ['', [Validators.required, Validators.email]],
      memberPassword: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit() {
    console.log(this.memberLoginForm.value);
    if (this.memberLoginForm.valid) {
      this.memberLoginService.memberLogin(this.memberLoginForm.value).subscribe({
        next: (response) => {
          console.log('Member login success:', response);
        },
        error: (err) => {
          console.error('Member login failed:', err);
        }
      });
    }
  }
}
