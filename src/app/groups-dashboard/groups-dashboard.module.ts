import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { GroupsDashboardComponent } from './groups-dashboard.component';

const routes: Routes = [
  { path: '', component: GroupsDashboardComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    GroupsDashboardComponent
  ]
})
export class GroupsDashboardModule {}
