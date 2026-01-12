import { Component } from '@angular/core';
import { MaterialModule } from '../shared/design/material-module';
import { GroupRegistrationComponent } from './group-registration/group-registration.component';
import { MemberRegistrationComponent } from './member-registration/member-registration.component';

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [MaterialModule, GroupRegistrationComponent, MemberRegistrationComponent],
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  constructor() {
  }
}
