import { Component, OnInit } from '@angular/core';
import { AppTimerService, AppTimer } from './core';
import * as moment from 'moment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'fp-affichage';

  constructor(private timerService: AppTimerService) {
  }

  ngOnInit() {
  }

  isConnected() {
    return this.timerService.isConnected();
  }

}
