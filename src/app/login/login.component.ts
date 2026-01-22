
import { Component, inject, model, OnInit, signal, ChangeDetectorRef } from '@angular/core';
import { GroupLoginComponent } from './group-login/group-login.component';
import { MemberLoginComponent } from './member-login/member-login.component';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import {
  MAT_DIALOG_DATA,
  MatDialogRef,
} from '@angular/material/dialog';
import { LoginService } from './login.service';
import { Router } from '@angular/router';

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    GroupLoginComponent,
    MemberLoginComponent,
    MatCardModule,
    MatTabsModule
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  readonly dialogRef = inject(MatDialogRef<LoginComponent>);
  readonly data = inject<DialogData>(MAT_DIALOG_DATA);
  readonly animal = model(this.data.animal);

  groupList: any;

  constructor(
    private loginService: LoginService,
    private router: Router,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.getGroupList();
  }

  getGroupList() {
    const data ={
      "groupLocation": "BHILAI"
    }
    this.loginService.groupList(data).subscribe({
      next: (response: any) => {
        console.log('Group list:', response);
        this.groupList = response;
        // this.router.navigate(['']);
        this.cdr.detectChanges();
      },
      error: (err: any) => {
        console.error('Group list failed:', err);
      }
    });
  }


}
