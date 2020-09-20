import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedAssignmentsUiModule } from '@school/shared/assignments/ui';
import { ViewAssignmentComponent } from './view-assignment/view-assignment.component';

const routes: Routes = [
  {
    path: '',
    component: ViewAssignmentComponent,
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedAssignmentsUiModule,
  ],
  declarations: [ViewAssignmentComponent],
})
export class StudentFeatureViewAssignmentsModule {}
