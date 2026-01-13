import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MembersDashboardComponent } from './members-dashboard.component';

const routes: Routes = [
  { path: '', component: MembersDashboardComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MembersDashboardComponent
  ]
})
export class MembersDashboardModule {}
