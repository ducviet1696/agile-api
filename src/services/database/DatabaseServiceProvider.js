import ServiceProvider from '../ultils/ServiceProvider';
import { container }   from '@fusion.io/container';

import Knex      from 'knex';
import { Model } from 'objection';

export default class DatabaseServiceProvider extends ServiceProvider {

    register() {
        container.singleton('connection', () => {
            const { database } = container.make('config');
            return Knex(database);
        });
    }

    boot() {
        Model.knex(container.make('connection'));
    }
}