import { Component, Input, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { RouterLink, Router } from '@angular/router';
import { GroupLoginService} from './group-login.service';
import { OnChanges } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-group-login',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterLink,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule
  ],
  templateUrl: './group-login.component.html',
  styleUrls: ['./group-login.component.css']
})
export class GroupLoginComponent implements OnChanges {
  
  @Input() groupList: any;
  groupLoginForm: FormGroup;
  hidePassword = true;

  constructor(
    private fb: FormBuilder, 
    private groupLoginService: GroupLoginService,
    private router: Router
  ) {
    this.groupLoginForm = this.fb.group({
      groupEmail: ['', [Validators.required, Validators.email]],
      groupPassword: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  ngOnChanges() { 
    console.log('Group List in GroupLoginComponent:', this.groupList);
  }

  onSubmit() {
    console.log(this.groupLoginForm.value);
    if (this.groupLoginForm.valid) {
      this.groupLoginService.groupLogin(this.groupLoginForm.value).subscribe({
        next: (response) => {
          console.log('Group login success:', response);
          this.router.navigate(['groups-dashboard']);
        },
        error: (err) => {
          console.error('Group login failed:', err);
        }
      });
    }
  }
  onNoClick(): void {
    // this.dialogRef.close();
  }
}
