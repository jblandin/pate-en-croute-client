import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { isUndefined } from 'util';

@Component({
  selector: 'app-display-hhmmss',
  templateUrl: './display-hhmmss.component.html',
  styleUrls: ['./display-hhmmss.component.scss']
})
export class DisplayHhmmssComponent implements OnInit, OnChanges {

  @Input() secondes: number;

  public hh: string;
  public mm: string;
  public ss: string;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.initHhmmss(changes.secondes.currentValue);
  }

  private pad(num: number) {
    return ('0' + num).slice(-2);
  }

  private initHhmmss(secs: number) {
    if (isUndefined(secs) || isNaN(secs)) {
      this.hh = '';
      this.mm = '';
      this.ss = '';
    }
    let minutes = Math.floor(secs / 60);
    secs = secs % 60;
    const hours = Math.floor(minutes / 60);
    minutes = minutes % 60;

    this.hh = this.pad(hours);
    this.mm = this.pad(minutes);
    this.ss = this.pad(secs);
  }
}
