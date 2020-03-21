import { Model } from 'objection';

export default class Credential extends Model {

    static get tableName() {
        return 'credentials';
    }

    static get jsonSchema() {
        return {
            "definitions": {},
            "type": "object",
            "required": [
                "username",
                "password",
            ],
            "properties": {
                "username": {
                    "type": "string"
                },
                "password": {
                    "type": "string"
                },
                "role": {
                    "type": "number, null"
                },
                "updated_at": {
                    "type": "number, null"
                },
                "created_at": {
                    "type": "number, null"
                },
                "deleted_at": {
                    "type": "number, null"
                }
            }
        }
    }
};
