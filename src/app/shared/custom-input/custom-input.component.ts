import { Component, Input, forwardRef } from '@angular/core';
import {
  ControlValueAccessor,
  FormControl,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';

export const CUSTOMINPUT_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => CustomInputComponent),
  multi: true,
};

export const CUSTOMINPUT_VALUE_VALIDATOR: any = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => CustomInputComponent),
  multi: true,
};

@Component({
  selector: 'app-custom-input',
  templateUrl: './custom-input.component.html',
  styleUrls: ['./custom-input.component.css'],
  providers: [CUSTOMINPUT_VALUE_ACCESSOR, CUSTOMINPUT_VALUE_VALIDATOR],
})
export class CustomInputComponent implements ControlValueAccessor {
  private onTouchedCallback: () => void = () => {};
  private onChangeCallback: (_: any) => void = () => {};
  @Input() placeholder = 'Введіть ваш пароль';
  section1Color: string = 'gray';
  section2Color: string = 'gray';
  section3Color: string = 'gray';
  private innerValue: any = '';

  constructor() {}

  get value(): any {
    return this.innerValue;
  }

  set value(v: any) {
    if (v !== this.innerValue) {
      this.innerValue = v;
      this.onChangeCallback(v);
    }
  }

  writeValue(value: any) {
    if (value !== this.innerValue) {
      this.innerValue = value;
    }
  }

  registerOnChange(fn: any) {
    this.onChangeCallback = fn;
  }

  registerOnTouched(fn: any) {
    this.onTouchedCallback = fn;
  }

  public validate(c: FormControl) {
    return c.errors;
  }

  checkPassword() {
    let strength = 0;

    console.log(this.value);

    if (this.value) {
      if (this.value.length === 0) {
        this.section1Color = 'gray';
        this.section2Color = 'gray';
        this.section3Color = 'gray';
      } else if (this.value.length < 8) {
        this.section1Color = 'red';
        this.section2Color = 'gray';
        this.section3Color = 'gray';
      } else {
        strength += /[a-zA-Z]/.test(this.value) ? 1 : 0;
        strength += /\d/.test(this.value) ? 1 : 0;
        strength += /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/.test(this.value) ? 1 : 0;

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
}
