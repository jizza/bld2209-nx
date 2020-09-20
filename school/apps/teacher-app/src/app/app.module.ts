import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('@school/teacher/feature-create-assignments').then(
        (m) => m.TeacherFeatureCreateAssignmentsModule
      ),
  },
];

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, RouterModule.forRoot(routes), ,],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
