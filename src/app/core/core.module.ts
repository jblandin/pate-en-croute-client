import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppTimerService } from './services';
import { HhmmssPipe } from './pipes';



@NgModule({
  declarations: [
    HhmmssPipe
  ],
  providers: [
    AppTimerService
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HhmmssPipe
  ]
})
export class CoreModule { }
