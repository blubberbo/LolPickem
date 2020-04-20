export class AccountSearchInfo {
  queue: string;
  tier: string;
  division: string;
  summonerName: string;
  accountId: string;

  constructor(
    queue?: string,
    tier?: string,
    division?: string,
    summonerName?: string,
    accountId?: string,
  ) {
    this.queue = queue;
    this.tier = tier;
    this.division = division;
    this.summonerName = summonerName;
    this.accountId = accountId;
  }
}
