import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  protected readonly submitted = signal(false);

  protected form: any;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      firstname: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
      lastname: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
      mobile: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  protected onSubmit(): void {
    this.submitted.set(true);
    if (this.form.valid) {
      // For now: just log — replace with real registration API call as needed
      // eslint-disable-next-line no-console
      console.log('Registration data:', this.form.value);
      // Optionally reset form
      // this.form.reset();
    }
  }

  protected control(name: string) {
    return this.form.get(name);
  }
}
