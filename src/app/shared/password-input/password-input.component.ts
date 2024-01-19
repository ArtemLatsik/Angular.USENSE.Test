import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-password-input',
  templateUrl: './password-input.component.html',
  styleUrls: ['./password-input.component.css'],
  providers: [
    {
      useExisting: PasswordInputComponent,
      provide: NG_VALUE_ACCESSOR,
      multi: true,
    },
  ],
})
export class PasswordInputComponent {
  @Input() placeholder: string = 'Введіть ваш пароль';
  @Output() valueChange = new EventEmitter<string>();

  private _value: string = '';

  private onChange: any = () => {};
  private onTouch: any = () => {};

  @Input()
  get value(): string {
    return this._value;
  }

  set value(val: string) {
    this._value = val;
    this.valueChange.emit(this._value);
  }

  onInput(event: Event): void {
    const inputValue = (event.target as HTMLInputElement).value;
    this.value = inputValue;
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
