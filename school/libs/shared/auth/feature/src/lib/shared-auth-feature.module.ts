import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedAuthDataAccessModule } from '@school/shared/auth/data-access';
import { SharedAuthModelsModule } from '@school/shared/auth/models';
import { Comp1Component } from './comp1/comp1.component';

@NgModule({
  imports: [CommonModule, SharedAuthDataAccessModule, SharedAuthModelsModule],
  declarations: [Comp1Component],
})
export class SharedAuthFeatureModule {}
