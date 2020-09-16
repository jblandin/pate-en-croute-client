import { Component, OnInit } from '@angular/core';
import { AppTimer, AppTimerService } from '../core';

const TIMEOUT_DANGER = 5 * 60;

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

  isTimeoutDanger() {
    return this.appTimer.timeleft <= TIMEOUT_DANGER
        && this.appTimer.timeleft >= 0
  }

  isTimeout() {
    return this.appTimer.timeleft < 0;
  }
}
