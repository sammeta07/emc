
import { Component } from '@angular/core';
import { GroupLoginComponent } from './group-login/group-login.component';
import { MemberLoginComponent } from './member-login/member-login.component';
import {MatCardModule} from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';

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
export class LoginComponent {
  
}
