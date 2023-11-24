import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  password: string = '';
  section1Color: string = 'gray';
  section2Color: string = 'gray';
  section3Color: string = 'gray';

  checkPassword() {
    const password = this.password;
    let strength = 0;

    if (password.length === 0) {
      this.section1Color = 'gray';
      this.section2Color = 'gray';
      this.section3Color = 'gray';
    } else if (password.length < 8) {
      this.section1Color = 'red';
      this.section2Color = 'gray';
      this.section3Color = 'gray';
    } else {
      strength += /[a-zA-Z]/.test(password) ? 1 : 0;
      strength += /\d/.test(password) ? 1 : 0;
      strength += /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/.test(password) ? 1 : 0;

      if (strength === 1) {
        this.section1Color = 'red';
        this.section2Color = 'gray';
        this.section3Color = 'gray';
      } else if (strength === 2) {
        this.section1Color = 'yellow';
        this.section2Color = 'yellow';
        this.section3Color = 'gray';
      } else if (strength === 3) {
        this.section1Color = 'green';
        this.section2Color = 'green';
        this.section3Color = 'green';
      }
    }
  }
}