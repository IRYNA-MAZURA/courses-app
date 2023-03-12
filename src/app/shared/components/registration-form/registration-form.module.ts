import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SharedModule } from '../../shared.module';
import { RegistrationFormRoutingModule } from './registration-form-routing.module';
import { RegistrationFormComponent } from './registration-form.component';

@NgModule({
    declarations: [RegistrationFormComponent],
    imports: [CommonModule, FontAwesomeModule, FormsModule, ReactiveFormsModule, SharedModule, RegistrationFormRoutingModule],
    exports: [RegistrationFormComponent],
})
export class RegistrationFormModule {
}