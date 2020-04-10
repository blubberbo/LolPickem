import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Team } from '../../shared/models/team.model';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'pickem-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss'],
})
export class PickemTeamComponent implements OnInit {
  // the team passed in
  @Input() team: Team;
  // whether this is for the blue team (false) or the red team (true)
  @Input() blueTeam = false;
  // whether the component should be in read only mode
  @Input() readOnly = false;
  // track if this team is selected
  @Input() selected = false;
  // track if the team has been verified, which means it should be highlighted
  @Input() verified = false;
  // whether the team won or not - note this is ONLY when in readOnly mode and we are viewing a history
  @Input() win;
  // create an event emitter for when the list is clicked
  @Output() listClick = new EventEmitter();
  constructor() {}
  ngOnInit() {}
}
