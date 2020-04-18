import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-play',
  // tslint:disable-next-line: no-host-metadata-property
  host: {
    class: 'play-container base-container centered',
  },
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.scss'],
})
export class PlayComponent implements OnInit {
  constructor(public auth: AuthService) {}

  ngOnInit() {}
}
