import * as io from 'socket.io-client';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AppTimer, Events } from '../models';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class AppTimerService {
  private socket;
  private appTimer$ = new BehaviorSubject({} as AppTimer);

  constructor(private configService: ConfigService) {
    configService.loadConfigurations().subscribe(conf => {
      this.socket = io(conf.server);
      this.socket
        .on(Events.APP_TIMER, (appTimer: AppTimer) => this.appTimer$.next(appTimer));
    });
  }

  public isConnected = () => this.socket && this.socket.connected as boolean;

  public getAppTimer = () => this.appTimer$;

  public startTimer = () => this.socket && this.socket.emit(Events.START);
  public initTimer = () => this.socket && this.socket.emit(Events.INIT);
  public pauseTimer = () => this.socket && this.socket.emit(Events.PAUSE);
  public stopTimer = () => this.socket && this.socket.emit(Events.STOP);
}
