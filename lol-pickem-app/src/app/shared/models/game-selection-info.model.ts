export class GameSelectionInfo {
  queue: string;
  tier: string;
  division: string;
  constructor(queue, tier, division) {
    this.queue = queue;
    this.tier = tier;
    this.division = division;
  }
}
