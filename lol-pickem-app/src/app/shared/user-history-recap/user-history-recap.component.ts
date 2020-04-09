import { Component, OnInit, Input } from '@angular/core';
import { UserHistory } from '../models/user-history.model';

@Component({
  selector: 'app-user-history-recap',
  templateUrl: './user-history-recap.component.html',
  styleUrls: ['./user-history-recap.component.scss'],
})
export class UserHistoryRecapComponent implements OnInit {
  // the user history that is passed in
  @Input() userHistory: UserHistory;
  constructor() {}

  ngOnInit() {}
}
