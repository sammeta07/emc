
import { Component } from '@angular/core';
import { MaterialModule } from '../shared/design/material-module';
import { GroupLoginComponent } from './group-login/group-login.component';
import { MemberLoginComponent } from './member-login/member-login.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MaterialModule, GroupLoginComponent, MemberLoginComponent],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {}
