import ServiceProvider from '../ultils/ServiceProvider';
import { container }   from '@fusion.io/container';

import Ajv from 'ajv';

export default class AjvServiceProvider extends ServiceProvider {

    register() {
        container.singleton('ajv', () => new Ajv());
    }
}