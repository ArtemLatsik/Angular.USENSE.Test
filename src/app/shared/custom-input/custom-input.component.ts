import { Component, Input } from '@angular/core';
import { PasswordStrengthService } from '../../services/password-strength.service';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-custom-input',
  templateUrl: './custom-input.component.html',
  styleUrls: ['./custom-input.component.css'],
  providers: [
    {
      useExisting: CustomInputComponent,
      provide: NG_VALUE_ACCESSOR,
      multi: true,
    },
  ],
})
export class CustomInputComponent {
  @Input() placeholder = 'Введіть ваш пароль';
  passwordStrengthSections: any[] = []; // Масив для зберігання розділів сили пароля
  private innerValue: string = '';
  private _value: string = '';

  private onChange: any = () => {};
  private onTouch: any = () => {};

  constructor(private passwordStrengthService: PasswordStrengthService) {}

  onPasswordInput() {
    this.passwordStrengthSections =
      this.passwordStrengthService.checkPasswordStrength(this.value);
  }

  get value(): string {
    return this.innerValue;
  }

  set value(v: string) {
    if (v !== this.innerValue) {
      this.innerValue = v;
      this.onPasswordInput(); // Оновлення розділів сили пароля
    }
  }

  writeValue(value: any) {
    this.value = value;
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }
}
