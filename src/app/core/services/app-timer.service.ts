import * as io from 'socket.io-client';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { BehaviorSubject } from 'rxjs';
import { AppTimer, Events } from '../models';

@Injectable({
  providedIn: 'root'
})
export class AppTimerService {
  private socket;
  private appTimer$ = new BehaviorSubject({} as AppTimer);

  constructor() {
    this.socket = io(environment.server);
    this.socket
      .on(Events.APP_TIMER, (appTimer: AppTimer) => this.appTimer$.next(appTimer));
  }

  public isConnected = () => this.socket.connected as boolean;

  public getAppTimer = () => this.appTimer$;

  public startTimer = () => this.socket.emit(Events.START);
  public initTimer = () => this.socket.emit(Events.INIT);
  public pauseTimer = () => this.socket.emit(Events.PAUSE);
  public stopTimer = () => this.socket.emit(Events.STOP);
}
