import { Component, OnInit, Input } from '@angular/core';
import { Team } from '../shared/models/team.model';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {
  // the team passed in
  @Input() team: Team;
  // whether this is for the blue team (false) or the red team (true)
  @Input() blueTeam = false;
  // track if this team is selected
  @Input() selected = false;
  constructor() {}
  ngOnInit() {}
}
