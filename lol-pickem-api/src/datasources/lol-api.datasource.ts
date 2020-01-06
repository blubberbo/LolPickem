import {
  inject,
  lifeCycleObserver,
  LifeCycleObserver,
  ValueOrPromise,
} from '@loopback/core';
import {juggler} from '@loopback/repository';
import config from './lol-api.datasource.config.json';

@lifeCycleObserver('datasource')
export class LolApiDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'lolApi';

  constructor(
    @inject('datasources.config.lolApi', {optional: true})
    dsConfig: object = config,
  ) {
    // make sure the LOL_API_KEY exists as we pass it into the config
    config.options.headers['X-Riot-Token'] = process.env.LOL_API_KEY != undefined ? process.env.LOL_API_KEY : '';
    // reassign the value of dsConfig from config since we not have the LOL_API_KEY
    Object.assign(dsConfig, config);
    super(dsConfig);
  }

  /**
   * Start the datasource when application is started
   */
  start(): ValueOrPromise<void> {
    // Add your logic here to be invoked when the application is started
  }

  /**
   * Disconnect the datasource when application is stopped. This allows the
   * application to be shut down gracefully.
   */
  stop(): ValueOrPromise<void> {
    return super.disconnect();
  }
}
