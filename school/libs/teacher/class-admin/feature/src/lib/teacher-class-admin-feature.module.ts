import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TeacherClassAdminDataAccessModule } from '@school/teacher/class-admin/data-access';
import { TeacherClassAdminModelsModule } from '@school/teacher/class-admin/models';
import { Comp1Component } from './comp1/comp1.component';

@NgModule({
  imports: [
    CommonModule,
    TeacherClassAdminDataAccessModule,
    TeacherClassAdminModelsModule,
  ],
  declarations: [Comp1Component],
})
export class TeacherClassAdminFeatureModule {}
