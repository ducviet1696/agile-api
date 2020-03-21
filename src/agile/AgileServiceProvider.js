import ServiceProvider from '../services/ultils/ServiceProvider';
import { container }   from '@fusion.io/container';

import Credential from './auth/Credential';

export default class AgileServiceProvider extends ServiceProvider {

    register() {
        this.registerModel();
    }

    registerModel() {
        const models = [
            Credential,
        ];
        models.forEach(Model => {
            container.value(`model.${Model.name}`, Model);
        });
    }

    boot() {
        this.bootValidationSchema();
    }

    bootValidationSchema() {
        const ajv                       = container.make('ajv');
        const { validate: { schemas } } = container.make('config');
        Object.entries(schemas).forEach(([schemaName, schema]) => {
            ajv.addSchema(schema, schemaName);
        });
    }
};