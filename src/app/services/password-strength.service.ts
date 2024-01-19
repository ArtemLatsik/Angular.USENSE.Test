import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PasswordStrengthService {

  constructor() {}

  checkPasswordStrength(password: string): any {
    let strength = 0;
    let section1Color = 'gray';
    let section2Color = 'gray';
    let section3Color = 'gray';

    if (password) {
      if (password.length < 8) {
        section1Color = 'red';
      } else {
        strength += /[a-zA-Z]/.test(password) ? 1 : 0;
        strength += /\d/.test(password) ? 1 : 0;
        strength += /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/.test(password) ? 1 : 0;

        if (strength === 1) {
          section1Color = 'red';
        } else if (strength === 2) {
          section1Color = 'yellow';
          section2Color = 'yellow';
        } else if (strength === 3) {
          section1Color = 'green';
          section2Color = 'green';
          section3Color = 'green';
        }
      }
    }

    return [
      {color: section1Color},
      {color: section2Color},
      {color: section3Color}
    ];
      
    
  }
}