import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { SharedAuthFeatureModule } from '@school/shared/auth/feature';
import { SharedUiHeaderModule } from '@school/shared/ui-header';
import { SharedUiMenuModule } from '@school/shared/ui-menu';
import { SharedUtilFormattingModule } from '@school/shared/util-formatting';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('@school/student/feature-view-assignments').then(
        (m) => m.StudentFeatureViewAssignmentsModule
      ),
  },
  {
    path: 'handin-assignments',
    loadChildren: () =>
      import('@school/student/feature-handin-assignments').then(
        (m) => m.StudentFeatureHandinAssignmentsModule
      ),
  },
];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    SharedUiMenuModule,
    SharedUiHeaderModule,
    SharedAuthFeatureModule,
    SharedUtilFormattingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
