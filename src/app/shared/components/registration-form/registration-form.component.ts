import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IconName } from 'src/app/features/enums/iconName.enum';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';

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

  constructor(library: FaIconLibrary) {
    library.addIconPacks(fas);
  }

  registrate(): void {
    if (this.registrationForm.invalid) {
      this.registrationForm.markAllAsTouched();
    } else {
      console.log('You were registrated');
    }
  }
}
