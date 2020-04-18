import { Component } from '@angular/core';

@Component({
  selector: 'app-history',
  // tslint:disable-next-line: no-host-metadata-property
  host: {
    class: 'history-container base-container',
  },
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss'],
})
export class HistoryComponent {}
