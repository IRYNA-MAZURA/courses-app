import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ModalComponent } from './components/modal/modal.component';
import {
    HeaderComponent,
    ButtonComponent,
    InfoComponent,
    SearchComponent,
    CourseCardComponent,
    LoginFormComponent,
    RegistrationFormComponent,
    CourseFormComponent
} from "./components";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { EmailValidatorDirective } from './directives/email.directive';
import { DurationPipe } from './pipes/duration.pipe';
import { DatePipe } from './pipes/date.pipe';
import { ToggleDirective } from './pipes/toggle.pipe';

const components = [
    HeaderComponent,
    ButtonComponent,
    InfoComponent,
    SearchComponent,
    ModalComponent,
    CourseCardComponent,
    LoginFormComponent,
    RegistrationFormComponent,
    CourseFormComponent
];

@NgModule({
    declarations: [components, EmailValidatorDirective, DurationPipe, DatePipe, ToggleDirective],
    imports: [
        CommonModule,
        FontAwesomeModule,
        FormsModule,
        ReactiveFormsModule,
    ],
    exports: [components, EmailValidatorDirective, DurationPipe, DatePipe, ToggleDirective],
})
export class SharedModule {
}