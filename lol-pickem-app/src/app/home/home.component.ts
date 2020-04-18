import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-home',
  // tslint:disable-next-line: no-host-metadata-property
  host: {
    class: 'home-container base-container centered',
  },
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(public auth: AuthService) {}

  ngOnInit() {}
}
