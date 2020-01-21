import { Component, OnInit, Input } from '@angular/core';
import { Team } from '../shared/models/team.model';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {
  @Input() team: Team;
  @Input() blueTeam = false;
  constructor() {}

  ngOnInit() {}
}
