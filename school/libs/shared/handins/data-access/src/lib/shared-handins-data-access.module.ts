import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedHandinsModelsModule } from '@school/shared/handins/models';

@NgModule({
  imports: [CommonModule, SharedHandinsModelsModule],
})
export class SharedHandinsDataAccessModule {}
