import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToolbarModule } from './toolbar/toolbar.module';
import { ButtonModule } from './button/button.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ToolbarModule,
    ButtonModule
  ],
  exports: [
    ToolbarModule,
    ButtonModule
  ]
})
export class SharedModule { }
