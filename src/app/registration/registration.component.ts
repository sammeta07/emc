import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators,FormGroup } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { MaterialModule } from '../shared/material-module';
import { ApiService } from '../shared/api.service';

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink, MaterialModule],
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  // protected readonly submitted = signal(false);
  // protected form: any;
  // constructor(private fb: FormBuilder) {
  //   this.form = this.fb.group({
  //     firstname: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
  //     lastname: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
  //     mobile: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
  //     email: ['', [Validators.required, Validators.email]]
  //   });
  // }
  // protected onSubmit(): void {
  //   this.submitted.set(true);
  //   if (this.form.valid) {
  //     // For now: just log — replace with real registration API call as needed
  //     // eslint-disable-next-line no-console
  //     console.log('Registration data:', this.form.value);
  //     // Optionally reset form
  //     // this.form.reset();
  //   }
  // }
  // protected control(name: string) {
  //   return this.form.get(name);
  // }
  // -----------------------------------------------------------------------------
  registrationForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private api: ApiService
  ) {
    this.registrationForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(3)]],
      lastName: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      mobile: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]]
    });
  }

  onSubmit() {
    console.log(this.registrationForm.value);
    if (this.registrationForm.valid) {
      this.api.postData(this.registrationForm.value).subscribe({
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
