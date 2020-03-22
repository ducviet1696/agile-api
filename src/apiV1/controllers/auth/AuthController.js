import Controller                from '../Controller';
import { Success, UnAuthorized } from '../../../services/http/message';
import jsonwebtoken              from 'jsonwebtoken';

export default class AuthController extends Controller {

    constructor(auth, config) {
        super();
        this.authenticator = auth;
        this.config        = config;
    }

    static get dependencies() {
        return ['auth', 'config'];
    }

    async login(context) {

        let credential;
        const { jwt } = this.config;

        try {
            credential = await this.authenticator.byPassword(context.request.body.username, context.request.body.password);
        } catch (e) {
            return context.body = new UnAuthorized(e.message);
        }

        return context.body = new Success({
            token: jsonwebtoken.sign(credential.toJSON(), jwt.privateKey, jwt.options),
        });
    }
}