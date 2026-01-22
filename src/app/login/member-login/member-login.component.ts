import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators, FormGroup, FormsModule } from '@angular/forms';
import { RouterLink, Router } from '@angular/router';import { MemberLoginService } from './member-login.service';
import { OnChanges } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { Component, inject, Input, model, signal} from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogRef,
} from '@angular/material/dialog';

// export interface DialogData {
//   animal: string;
//   name: string;
// }
@Component({
  selector: 'app-member-login',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterLink,
    MatCardModule,
    MatIconModule,
    MatFormFieldModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
  ],
  templateUrl: './member-login.component.html',
  styleUrls: ['./member-login.component.css']
})
export class MemberLoginComponent implements OnChanges {

  @Input() groupList: any;
  memberLoginForm: FormGroup;
  hidePassword = true;

  constructor(
    private fb: FormBuilder,
    private memberLoginService: MemberLoginService,
    private router: Router,
  ) {
    this.memberLoginForm = this.fb.group({
      memberEmail: ['', [Validators.required, Validators.email]],
      memberPassword: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  ngOnChanges() { 
    console.log('Group List in MemberLoginComponent:', this.groupList);
  }

  onSubmit() {
    console.log(this.memberLoginForm.value);
    if (this.memberLoginForm.valid) {
      this.memberLoginService.memberLogin(this.memberLoginForm.value).subscribe({
        next: (response) => {
          console.log('Member login success:', response);
          this.router.navigate(['members-dashboard']);
        },
        error: (err) => {
          console.error('Member login failed:', err);
        }
      });
    }
  }
  // readonly dialogRef = inject(MatDialogRef<MemberLoginComponent>);
  // readonly data = inject<DialogData>(MAT_DIALOG_DATA);
  // readonly animal = model(this.data.animal);

  onNoClick(): void {
    // this.dialogRef.close();
  }
}
