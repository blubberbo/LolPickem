import { Component, OnInit } from '@angular/core';
import { LolPickemService } from '../shared/lol-pickem.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public lolPickemService: LolPickemService) { }

  ngOnInit() {
  }

  // When the Play button is clicked
  onPlay() {
    // the user wants to play a game
    // call the API to get GameInfo
     return this.lolPickemService.getGameInfo().subscribe(res => {
       console.log(res);
     });
  }

}
