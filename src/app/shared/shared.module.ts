import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomInputModule } from './custom-input/custom-input.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, CustomInputModule],
  exports: [CustomInputModule],
})
export class SharedModule {}
