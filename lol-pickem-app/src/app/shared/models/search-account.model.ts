export class SearchAccount {
  // inherited from the Riot API
  accountId: string;
  // inherited from the Riot API
  name: string;
  // inherited from the Riot API
  profileIconId: number;
  // inherited from the Riot API
  summonerLevel: number;
  // a flag indicating no account was found
  accountNotFound = false;
  // a flag indicating if the account was selected
  selected = false;
}
