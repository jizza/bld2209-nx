import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TeacherClassAdminModelsModule } from '@school/teacher/class-admin/models';

@NgModule({
  imports: [CommonModule, TeacherClassAdminModelsModule],
})
export class TeacherClassAdminDataAccessModule {}
