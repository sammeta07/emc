import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { MaterialModule } from '../../shared/design/material-module';
import { GroupLogin} from './group-login';

@Component({
  selector: 'app-group-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink, MaterialModule,],
  templateUrl: './group-login.component.html',
  styleUrls: ['./group-login.component.css']
})
export class GroupLoginComponent {
  
  groupLoginForm: FormGroup;
  hidePassword = true;

  constructor(
    private fb: FormBuilder, 
    private groupLoginService: GroupLogin,
  ) {
    this.groupLoginForm = this.fb.group({
      groupEmail: ['', [Validators.required, Validators.email]],
      groupPassword: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit() {
    console.log(this.groupLoginForm.value);
    if (this.groupLoginForm.valid) {
      this.groupLoginService.groupLogin(this.groupLoginForm.value).subscribe({
        next: (response) => {
          console.log('Group login success:', response);
        },
        error: (err) => {
          console.error('Group login failed:', err);
        }
      });
    }
  }
}
