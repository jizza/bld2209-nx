import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { SharedAuthFeatureModule } from '@school/shared/auth/feature';
import { SharedUiHeaderModule } from '@school/shared/ui-header';
import { SharedUiMenuModule } from '@school/shared/ui-menu';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('@school/teacher/feature-create-assignments').then(
        (m) => m.TeacherFeatureCreateAssignmentsModule
      ),
  },
  {
    path: 'review-handins',
    loadChildren: () =>
      import('@school/teacher/feature-review-handins').then(
        (m) => m.TeacherFeatureReviewHandinsModule
      ),
  },
  {
    path: 'class-admin',
    loadChildren: () =>
      import('@school/teacher/class-admin/feature').then(
        (m) => m.TeacherClassAdminFeatureModule
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
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
