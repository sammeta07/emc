import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export class CustomValidators {
  static passwordMatch(control: AbstractControl): ValidationErrors | null {
    const groupPassword = control.get('groupPassword');
    const groupConfirmPassword = control.get('groupConfirmPassword');

    if (!groupPassword || !groupConfirmPassword) {
      return null;
    }

    if (groupPassword.value !== groupConfirmPassword.value) {
      groupConfirmPassword.setErrors({ passwordMismatch: true });
      return { passwordMismatch: true };
    } else {
      // If they match, we need to make sure we don't accidentally 
      // clear other errors (like 'required')
      const errors = groupConfirmPassword.errors;
      if (errors) {
        delete errors['passwordMismatch'];
        groupConfirmPassword.setErrors(Object.keys(errors).length ? errors : null);
      }
      return null;
    }
  }
}