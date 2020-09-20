import { Component, OnInit } from '@angular/core';
import { AssignmentsService } from '@school/shared/assignments/data-access';
import { Assignment } from '@school/shared/assignments/models';

@Component({
  selector: 'school-view-assignment',
  templateUrl: './view-assignment.component.html',
  styleUrls: ['./view-assignment.component.css'],
})
export class ViewAssignmentComponent implements OnInit {
  assignment: Assignment;

  constructor(private assignmentsService: AssignmentsService) {}

  ngOnInit(): void {
    this.assignment = this.assignmentsService.getAssignment();
  }
}
