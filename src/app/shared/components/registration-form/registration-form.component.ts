import { Component } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { IconName } from 'src/app/features/enums/iconName.enum';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from 'src/app/auth/services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.scss'],
})
export class RegistrationFormComponent {
  registrationForm: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(6)]),
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  });

  iconEnum: typeof IconName = IconName;

  constructor(library: FaIconLibrary, private auth: AuthService, private router: Router) {
    library.addIconPacks(fas);
  }

  registrate(form: any): void {
    if (this.registrationForm.invalid) {
      this.registrationForm.markAllAsTouched();
    } else {
      this.auth.register(form.value).subscribe(() => {
        console.log('User was registrated');
        this.router.navigate(['/login']);
      });
    }
  }

  goToLogin(): void {
    this.router.navigate(['/login']);
  }
}
