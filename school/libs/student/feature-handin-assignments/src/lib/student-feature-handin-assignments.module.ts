import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedHandinsDataAccessModule } from '@school/shared/handins/data-access';
import { SharedHandinsModelsModule } from '@school/shared/handins/models';
import { SharedHandinsUiModule } from '@school/shared/handins/ui';
import { Comp1Component } from './comp1/comp1.component';

@NgModule({
  imports: [
    CommonModule,
    SharedHandinsDataAccessModule,
    SharedHandinsUiModule,
    SharedHandinsModelsModule,
  ],
  declarations: [Comp1Component],
})
export class StudentFeatureHandinAssignmentsModule {}
