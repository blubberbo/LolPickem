import { GameDetails, Player, Champion, SummonerSpell } from '.';
import { Team } from './team.model';
import { LolTeam } from './lol-team.model';
import { LolParticipant } from './lol-participant.model';
import { LolParticipantIdentity } from './lol-participant-identity.model';
import champions from '../constants/champion.json';
import { LolDataDragonConstants } from '../constants/lol-data-dragon-constants';
import summonerSpells from '../constants/summoner.json';
import { LolSummonerSpell } from './lol-summoner-spell.model';
import { LolGame } from './lol-game.model';
export class Game {
  gameId: number;
  seasonId: number;
  queueId: number;
  teams: Array<LolTeam>;
  participants: Array<LolParticipant>;
  participantIdentities: Array<LolParticipantIdentity>;
  gameDetails: GameDetails;
  constructor(lolGame?: LolGame) {
    // if a lol game was passed to the constructor, load the properties
    if (lolGame) {
      this.loadGameProperties(lolGame);
      // when constructing this object, we want to build the players array that we want
      // NOTE: I did not create deep models for the objects returned from the Lol API
      if (
        lolGame.teams &&
        lolGame.participants &&
        lolGame.participantIdentities
      ) {
        // create the object for team 1 - which we will treat as the first team in the Lol API object array
        this.gameDetails = new GameDetails();
        // * NOTE: teamId 100 is the blue team
        this.gameDetails.blueTeam = this.createTeam(
          lolGame.teams[0],
          lolGame.participants,
          lolGame.participantIdentities,
          100,
        );
        // * NOTE: teamId 200 is the blue team
        this.gameDetails.redTeam = this.createTeam(
          lolGame.teams[1],
          lolGame.participants,
          lolGame.participantIdentities,
          200,
        );
      }
    }
    // remove the LoL API properties from the object before continuing (so they are not passed to the front end)
    this.removeLolAPIProperties();
  }

  /**
   * create a local team object from a Lol Team object returned from the API - we only want certain values in our structure
   * @param lolTeam: LoLTeam
   * @param participants: Array of LolParticipants
   * @param participantIdentities: Array of LolParticipantIdentities
   * @param teamId: 100 = red, 200 = blue
   */
  createTeam(
    lolTeam: LolTeam,
    participants: Array<LolParticipant>,
    participantIdentities: Array<LolParticipantIdentity>,
    teamId: number,
  ): Team {
    // create a team to return
    let returnTeam = new Team();
    // extract the high-level properties from the passed in team
    returnTeam.win = lolTeam.win === 'Win';
    returnTeam.firstBlood = lolTeam.firstBlood;
    returnTeam.firstTower = lolTeam.firstTower;
    // extract/create each player from the passed in team
    // we know there are 10 players, so begin a 10 step loop
    for (let playerIndex = 0; playerIndex < 10; playerIndex++) {
      // check if the player is on the right team
      if (participants[playerIndex].teamId === teamId) {
        // create a new player from each of the passed in Lol API players
        let newPlayer = this.CreatePlayer(
          participants[playerIndex],
          participantIdentities[playerIndex],
        );
        // push the new player to the array of players
        returnTeam.players.push(newPlayer);
      }
      // check if we have filled the players array with 5 players
      if (returnTeam.players.length === 5) {
        // if we have 5 players, break the loop
        break;
      }
    }
    // return the created team
    return returnTeam;
  }

  /**
   * create a local player object based on extracting the information we want from a LoL Participant and LoL Participant Identity
   * @param lolParticipant: LoLParticipant
   * @param lolParticipantIdentity: LoLParticipantIdentity
   */
  CreatePlayer(
    lolParticipant: LolParticipant,
    lolParticipantIdentity: LolParticipantIdentity,
  ): Player {
    // create a player to return
    let returnPlayer = new Player();
    returnPlayer.summonerName = lolParticipantIdentity.player.summonerName;
    returnPlayer.championId = lolParticipant.championId;
    returnPlayer.spell1.spellId = lolParticipant.spell1Id;
    returnPlayer.spell2.spellId = lolParticipant.spell2Id;
    returnPlayer.accountId = lolParticipantIdentity.player.accountId;
    // get the champion information from the Data Dragon JSON file (stored locally)
    const champion: Champion = this.getChampionNameByChampionId(
      returnPlayer.championId,
    );
    returnPlayer.championName = champion.championName;
    // create the image URLs based on the champion information
    returnPlayer.championSquareImageUrl = `${LolDataDragonConstants.squareImageUrl}${champion.championImageName}`;
    // get both summoner spells' information from the Data Dragon JSON file (stored locally)
    returnPlayer.spell1 = this.getSummonerSpellBySummonerSpellId(
      returnPlayer.spell1.spellId,
    );
    returnPlayer.spell2 = this.getSummonerSpellBySummonerSpellId(
      returnPlayer.spell2.spellId,
    );
    // return the player
    return returnPlayer;
  }

  /**
   * load the properties we want from a LolGame into the local game model
   * @param lolGame: LolGame
   */
  loadGameProperties(lolGame: LolGame) {
    this.gameId = lolGame.gameId;
    this.seasonId = lolGame.seasonId;
    this.queueId = lolGame.queueId;
    //  teams: Array<LolTeam>;
    //  participants: Array<LolParticipant>;
    //  participantIdentities: Array<LolParticipantIdentity>;
    //  gameDetails: GameDetails;
  }

  /**
   * remove all the Lol API properties from the game object, so they are not passed to the front end
   */
  removeLolAPIProperties() {
    delete this.teams;
    delete this.participants;
    delete this.participantIdentities;
  }

  /**
   * find a champion from the champion.json file taken from Data Dragon
   * @param championId: number
   */
  getChampionNameByChampionId(championId: number): Champion {
    // create a return variable
    let returnChampion = new Champion();
    // loop through all the champions
    const championValues = Object.values(champions.data);
    for (const champion of championValues) {
      // find the champion that matches the one we are looking for
      if (champion['key'] === championId.toString()) {
        // store the champion's name and break the loop
        returnChampion.championName = champion['name'];
        returnChampion.championImageName = champion['image']['full'];
        break;
      }
    }
    // return the champion
    return returnChampion;
  }

  /**
   * find a summoner spell from the summoner.json file taken from Data Dragon
   * @param summonerSpellId: number
   */
  getSummonerSpellBySummonerSpellId(summonerSpellId: number): SummonerSpell {
    // create a return variable
    let returnSummonerSpell = new SummonerSpell();
    // loop through all the summoner spells
    const summonerSpellValues = (Object.values(
      summonerSpells.data,
    ) as unknown) as LolSummonerSpell[];
    for (const summonerSpell of summonerSpellValues) {
      // find the summoner spell that matches the one we are looking for
      if (summonerSpell.spellId === summonerSpellId) {
        // store the summoner spell
        returnSummonerSpell.name = summonerSpell.name;
        returnSummonerSpell.spellId = summonerSpell.spellId;
        returnSummonerSpell.imageName = summonerSpell.image?.full;
        break;
      }
    }
    // return the summoner spell
    return returnSummonerSpell;
  }
}

export interface GameRelations {
  // describe navigational properties here
}

export type GameWithRelations = Game & GameRelations;
