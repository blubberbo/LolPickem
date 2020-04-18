import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-release-notes',
  // tslint:disable-next-line: no-host-metadata-property
  host: {
    class: 'release-notes-container base-container',
  },
  templateUrl: './release-notes.component.html',
  styleUrls: ['./release-notes.component.scss'],
})
export class ReleaseNotesComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
