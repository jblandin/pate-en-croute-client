import { Component, OnInit } from '@angular/core';
import { AppTimerService, AppTimer } from '../core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  public appTimer: AppTimer;
  public isInitTime = false;
  public dureeForm = new FormGroup({
    duree : new FormControl('')
  });

  constructor(public timerService: AppTimerService) { }

  ngOnInit() {
    this.timerService.getAppTimer()
    .subscribe( (appTimer: AppTimer) => this.appTimer = appTimer);
  }

  public launchInit() {
    if (this.dureeForm.valid) {
      const arr = this.dureeForm.value.duree.split(':');
      const res =  (+arr[0] * 3600) + (+arr[1] * 60) + (+arr[2]);
      this.timerService.initTimer(res);
      this.isInitTime = false;
    }
  }
}
