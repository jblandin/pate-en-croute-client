import { Component, OnInit } from '@angular/core';
import { AppTimerService, AppTimer } from '../core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  public appTimer: AppTimer;

  constructor(public timerService: AppTimerService) { }

  ngOnInit() {
    this.timerService.getAppTimer()
    .subscribe( (appTimer: AppTimer) => this.appTimer = appTimer);
  }

}
