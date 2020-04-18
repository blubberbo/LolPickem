import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-riot-games-disclaimer',
  // tslint:disable-next-line: no-host-metadata-property
  host: {
    class: 'riot-games-disclaimer-container base-container centered',
  },
  templateUrl: './riot-games-disclaimer.component.html',
  styleUrls: ['./riot-games-disclaimer.component.scss'],
})
export class RiotGamesDisclaimerComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
