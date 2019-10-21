import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http'
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
    CommonModule,
    HttpClientModule
  ],
  exports: [
    HhmmssPipe
  ]
})
export class CoreModule { }
