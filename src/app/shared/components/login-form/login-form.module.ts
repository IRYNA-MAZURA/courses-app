import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SharedModule } from '../../shared.module';
import { LoginFormRoutingModule } from './login-form-routing.module';
import { LoginFormComponent } from './login-form.component';

@NgModule({
    declarations: [LoginFormComponent],
    imports: [CommonModule, FontAwesomeModule, FormsModule, SharedModule, LoginFormRoutingModule],
    exports: [LoginFormComponent],
})
export class LoginFormModule {
}