import {DefaultCrudRepository} from '@loopback/repository';
import {UserHistory, UserHistoryRelations} from '../models';
import {LolPickemDbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class UserHistoryRepository extends DefaultCrudRepository<
  UserHistory,
  typeof UserHistory.prototype.id,
  UserHistoryRelations
> {
  constructor(
    @inject('datasources.lolPickemDb') dataSource: LolPickemDbDataSource,
  ) {
    super(UserHistory, dataSource);
  }
}
