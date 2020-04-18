import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-about',
  // tslint:disable-next-line: no-host-metadata-property
  host: {
    class: 'about-container base-container',
  },
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  constructor(public auth: AuthService) {}

  ngOnInit() {}
}
