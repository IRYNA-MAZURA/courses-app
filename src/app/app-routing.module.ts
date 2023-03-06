import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseFormComponent } from './shared/components';
import { AuthorizedGuard } from "./auth/guards/authorized/authorized.guard";
import { NotAuthorizedGuard } from "./auth/guards/not-authorized/not-authorized.guard";
import { CourseComponent } from './features/course/course.component';
import { AdminGuard } from './user/guards/admin/admin.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'courses',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadChildren: () => import('./shared/components/login-form/login-form.module').then(m => m.LoginFormModule),
    canLoad: [NotAuthorizedGuard],
  },
  {
    path: 'registration',
    loadChildren: () => import('./shared/components/registration-form/registration-form.module').then(m => m.RegistrationFormModule),
    canLoad: [NotAuthorizedGuard],
  },
  {
    path: 'courses',
    canLoad: [AuthorizedGuard],
    children: [
      {
        path: '',
        loadChildren: () => import('./features/courses/courses.module').then(m => m.CoursesModule),
      },
      {
        path: 'add',
        component: CourseFormComponent,
        canActivate: [AdminGuard],
      },
      {
        path: ':id',
        component: CourseComponent,
      },
      {
        path: 'edit/:id',
        component: CourseFormComponent,
        canActivate: [AdminGuard],
      }
    ]
  },
  { path: '**', redirectTo: 'courses', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}