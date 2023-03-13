import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AuthModule } from "./auth/auth.module";
import { AuthorizedGuard } from "./auth/guards/authorized/authorized.guard";
import { NotAuthorizedGuard } from "./auth/guards/not-authorized/not-authorized.guard";
import { AppComponent } from './app.component';
import { CoursesModule } from './features/courses/courses.module';
import { LoginFormModule } from './shared/components/login-form/login-form.module';
import { RegistrationFormModule } from './shared/components/registration-form/registration-form.module';
import { SharedModule } from './shared/shared.module';
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { TokenInterceptor } from "./auth/interceptors/token.interceptor";
import { CoursesService } from "./services/courses/courses.service";
import { UserModule } from "./user/user.module";
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { effects, reducers } from './store';
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CoursesModule,
    LoginFormModule,
    RegistrationFormModule,
    AppRoutingModule,
    SharedModule,
    AuthModule,
    UserModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot(effects),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
  ],
  providers: [
    AuthorizedGuard,
    NotAuthorizedGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
    CoursesService,
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
