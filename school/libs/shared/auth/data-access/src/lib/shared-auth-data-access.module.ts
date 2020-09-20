import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedAuthModelsModule } from '@school/shared/auth/models';

@NgModule({
  imports: [CommonModule, SharedAuthModelsModule],
})
export class SharedAuthDataAccessModule {}
