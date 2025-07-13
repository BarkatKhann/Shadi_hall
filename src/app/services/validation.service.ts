import { Injectable } from '@angular/core';
import { AbstractControl, FormGroup, ValidationErrors } from '@angular/forms';


@Injectable({
  providedIn: 'root'
})
export class ValidationService {

  constructor() { }

    // Name: required, alphabets only
  nameValidator(control: AbstractControl): ValidationErrors | null {
    const value = control.value;
    if (!value) return { required: true };

    const nameRegex = /^[A-Za-z\s]+$/;
    return nameRegex.test(value) ? null : { invalidName: true };
  }

  // Number: required, digits only
  numberValidator(control: AbstractControl): ValidationErrors | null {
    const value = control.value;
    if (!value) return { required: true };

    const numberRegex = /^[0-9]+$/;
    return numberRegex.test(value) ? null : { invalidNumber: true };
  }

// email
  emailValidator(control: AbstractControl): ValidationErrors | null {
  const value = control.value;
  if (!value) return null; // skip if empty; use `required` separately

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(value) ? null : { invalidEmail: true };
}
mobileValidator(control: AbstractControl): ValidationErrors | null {
  const value = control.value;
  if (!value) return null; // leave required to built-in validator

  const mobileRegex = /^[0-9]{10}$/; // only 10 digits
  return mobileRegex.test(value) ? null : { invalidMobile: true };
}

 matchPasswords(passwordField: string, confirmPasswordField: string) {
    return (formGroup: AbstractControl): ValidationErrors | null => {
      const group = formGroup as FormGroup;
      const password = group.controls[passwordField];
      const confirmPassword = group.controls[confirmPasswordField];

      if (confirmPassword.errors && !confirmPassword.errors['passwordMismatch']) {
        return null; // other validations exist
      }

      if (password.value !== confirmPassword.value) {
        confirmPassword.setErrors({ passwordMismatch: true });
      } else {
        confirmPassword.setErrors(null);
      }

      return null;
    };
  }
}
