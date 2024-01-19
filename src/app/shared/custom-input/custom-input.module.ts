import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomInputComponent } from './custom-input.component';
import { FormsModule } from '@angular/forms';
import { PasswordInputModule } from '../password-input/password-input.module';

@NgModule({
  declarations: [CustomInputComponent],
  imports: [CommonModule, FormsModule, PasswordInputModule],
  exports: [CustomInputComponent],
})
export class CustomInputModule {}
