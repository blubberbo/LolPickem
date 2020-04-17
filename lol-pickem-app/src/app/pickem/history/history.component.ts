import { Component, OnInit, ViewChild } from '@angular/core';
import { LolPickemService } from '../../shared/lol-pickem.service';
import { AuthService } from '../../auth/auth.service';
import { UserHistory } from '../../shared/models/user-history.model';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { MatPaginator } from '@angular/material/paginator';
import { TeamType } from 'src/app/shared/models/enums/team-type.enum';
import { mergeMap, take, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'pickem-history',
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
export class PickemHistoryComponent implements OnInit {
  // a place to store the expanded user history row
  public expandedElement: UserHistory | null;
  // a local object to store the user histories to display on the page
  public histories: Array<UserHistory> = [];
  // a local object to store constructed MatTableDataSource of histories data
  public historiesDataSource = new MatTableDataSource(this.histories);
  // a flag to indicate when histories are loading (eg. when we are waiting for the api call to return)
  public historiesLoading = false;
  // a local object to store the column names in the table
  public historiesTableColumns: string[] = [
    'gameId',
    'guessedTeam',
    'guessedCorrectly',
    'timestamp',
  ];
  // tslint:disable-next-line: variable-name
  public _teamType = TeamType;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  constructor(
    public auth: AuthService,
    public lolPickemService: LolPickemService,
  ) {}
  ngOnInit() {
    // bind the data source sorting & paginator to the sort ViewChild
    this.historiesDataSource.sort = this.sort;
    this.historiesDataSource.paginator = this.paginator;

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
      this.auth.userProfile$
        .pipe(
          take(1),
          mergeMap((user) =>
            // use the email of the logged in user to get their histories
            this.lolPickemService.getUserHistories(user.email),
          ),
          catchError((error) => {
            throw error;
          }),
        )
        .subscribe((returnedHistories: UserHistory[]) => {
          // store the array on the page
          this.histories = returnedHistories;
          // construct a new data source from the array
          this.historiesDataSource = new MatTableDataSource(this.histories);
          // rebind the data source sorting to the sort ViewChild
          this.historiesDataSource.sort = this.sort;
          this.historiesDataSource.paginator = this.paginator;
          // indicate the histories are done loading
          this.historiesLoading = false;
        });
    } else {
      // else, the user is not logged in, so throw an error, because the user should not be able to call this method
      throw new Error(
        'There is no user logged in, so we cannot get any histories. Please login to use this feature.',
      );
    }
  }
}
