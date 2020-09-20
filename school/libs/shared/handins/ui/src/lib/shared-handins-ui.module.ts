import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedHandinsModelsModule } from '@school/shared/handins/models';
import { SharedUtilFormattingModule } from '@school/shared/util-formatting';
import { Comp1Component } from './comp1/comp1.component';

@NgModule({
  imports: [
    CommonModule,
    SharedHandinsModelsModule,
    SharedUtilFormattingModule,
  ],
  declarations: [Comp1Component],
})
export class SharedHandinsUiModule {}
