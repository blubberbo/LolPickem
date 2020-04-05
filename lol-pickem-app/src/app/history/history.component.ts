import { Component, OnInit, ViewChild } from '@angular/core';
import { LolPickemService } from '../shared/lol-pickem.service';
import { AuthService } from '../auth/auth.service';
import { UserHistory } from '../shared/models/user-history.model';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition(
        'expanded <=> collapsed',
        animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)'),
      ),
    ]),
  ],
})
export class HistoryComponent implements OnInit {
  // a local object to store the user histories to display on the page
  public histories: Array<UserHistory> = [];
  // a local object to store constructed MatTableDataSource of histories data
  public historiesDataSource = new MatTableDataSource(this.histories);
  // a local object to store the column names in the table
  public historiesTableColumns: string[] = [
    'gameId',
    'guessedCorrectly',
    'timestamp',
  ];
  // a flag to indicate when histories are loading (eg. when we are waiting for the api call to return)
  public historiesLoading = false;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  expandedElement: UserHistory | null;
  constructor(
    public auth: AuthService,
    public lolPickemService: LolPickemService,
  ) {}
  ngOnInit() {
    // bind the data source sorting to the sort ViewChild
    this.historiesDataSource.sort = this.sort;
    // if the user is logged in
    if (this.auth.loggedIn) {
      this.refreshHistories();
    }
  }

  // refresh the histories by fetching them from the server
  refreshHistories() {
    // if the user is logged in
    if (this.auth.loggedIn) {
      // indicate the histories are loading
      this.historiesLoading = true;
      // use the email of the logged in user to get their histories
      this.auth.userProfile$.subscribe(user => {
        // pass the returned histories to the local histories object to display in the ui
        this.lolPickemService
          .getUserHistories(user.email)
          .subscribe(returnedHistories => {
            // store the array on the page
            this.histories = returnedHistories;
            // construct a new data source from the array
            this.historiesDataSource = new MatTableDataSource(this.histories);
            // rebind the data source sorting to the sort ViewChild
            this.historiesDataSource.sort = this.sort;
            // indicate the histories are done loading
            this.historiesLoading = false;
          });
      });
    } else {
      // else, the user is not logged in, so throw an error, because the user should not be able to call this method
      throw new Error(
        'There is no user logged in, so we cannot get any histories. Please login to use this feature.',
      );
    }
  }

  // sort the histories
  // sortHistories();
}
