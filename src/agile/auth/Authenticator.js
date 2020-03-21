export default class Authenticator {

    constructor(credential, hasher) {
        this.credential = credential;
        this.hasher     = hasher;
    }

    async byPassword(username, password) {
        const error         = new Error();
        let foundCredential = await this.credential.query().findOne({
            username : username,
            deleted_at: null,
        });

        if (!foundCredential) {
            error.message = {
                code   : 'AGILE_UNAUTH_INCORRECT_USERNAME',
                message: 'Username is not existed',
            };
            throw error;
        }

        if (!await this.hasher.compare(password, foundCredential.password)) {
            error.message = {
                code   : 'AGILE_UNAUTH_INCORRECT_PASSWORD',
                message: 'Password mismatch',
            };
            throw error;
        }

        return foundCredential;
    }
}