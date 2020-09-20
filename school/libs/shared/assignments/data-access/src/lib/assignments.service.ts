import { Injectable } from '@angular/core';
import { Assignment } from '@school/shared/assignments/models';

@Injectable({
  providedIn: 'root',
})
export class AssignmentsService {
  constructor() {}

  getAssignment(): Assignment {
    return {
      id: 1,
      title: 'My first assignment',
      description: 'Watch BLD',
      deadline: new Date(),
    };
  }
}
