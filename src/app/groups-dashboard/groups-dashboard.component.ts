import { Component } from '@angular/core';import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';

@Component({
  selector: 'app-groups-dashboard',
  standalone: true,
  imports: [
    MatIconModule,
    MatToolbarModule
  ],
  templateUrl: './groups-dashboard.component.html',
  styleUrls: ['./groups-dashboard.component.css']
})
export class GroupsDashboardComponent {
  groupName = 'My Group'; // Replace with actual group name logic
}
