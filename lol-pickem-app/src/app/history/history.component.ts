import { Component, OnInit } from '@angular/core';
import { LolPickemService } from '../shared/lol-pickem.service';
import { AuthService } from '../auth/auth.service';
import { UserHistory } from '../shared/models/user-history.model';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss'],
})
export class HistoryComponent implements OnInit {
  // a local object to store the user histories to display on the page
  public histories: Array<UserHistory> = [];

  constructor(
    public auth: AuthService,
    public lolPickemService: LolPickemService,
  ) {}

  ngOnInit() {
    // if the user is logged in
    if (this.auth.loggedIn) {
      // use the email of the logged in user to get their histories
      this.auth.userProfile$.subscribe(user => {
        // pass the returned histories to the local histories object to display in the ui
        this.lolPickemService
          .getUserHistories(user.email)
          .subscribe(returnedHistories => (this.histories = returnedHistories));
      });
    }
  }
}
