import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AssignmentComponent } from './assignment/assignment.component';

@NgModule({
  imports: [CommonModule],
  declarations: [AssignmentComponent],
  exports: [AssignmentComponent],
})
export class SharedAssignmentsUiModule {}
