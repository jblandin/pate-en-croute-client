import { Component, OnInit } from '@angular/core';
import { AppTimer, AppTimerService } from '../core';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent implements OnInit {

  public appTimer: AppTimer;

  constructor(
    private timerService: AppTimerService
  ) { }

  ngOnInit() {
    this.timerService.getAppTimer()
      .subscribe( appTimer => this.appTimer = appTimer);
  }

  isConnected(): boolean {
    return this.timerService.isConnected();
  }
}
