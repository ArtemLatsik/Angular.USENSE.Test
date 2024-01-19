import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomInputModule } from './custom-input/custom-input.module';
import { PasswordInputComponent } from './password-input/password-input.component';
import { PasswordInputModule } from './password-input/password-input.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, CustomInputModule, PasswordInputModule],
  exports: [CustomInputModule],
})
export class SharedModule {}
