import { Component } from '@angular/core';
import { GroupRegistrationComponent } from './group-registration/group-registration.component';
import { MemberRegistrationComponent } from './member-registration/member-registration.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [
    MatCardModule,
    MatTabsModule,
    GroupRegistrationComponent,
    MemberRegistrationComponent
  ],
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  constructor() {
  }
}
