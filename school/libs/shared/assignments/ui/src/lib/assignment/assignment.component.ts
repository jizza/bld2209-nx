import { Component, Input, OnInit } from '@angular/core';
import { Assignment } from '@school/shared/assignments/models';

@Component({
  selector: 'school-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.css'],
})
export class AssignmentComponent implements OnInit {
  @Input() assignment: Assignment;

  constructor() {}

  ngOnInit() {}
}
