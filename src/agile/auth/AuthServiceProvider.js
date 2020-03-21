import ServiceProvider from '../../services/ultils/ServiceProvider';
import { container }   from '@fusion.io/container';

import bcrypt        from 'bcryptjs';
import Credential    from './Credential';
import Authenticator from './Authenticator';

export default class AuthServiceProvider extends ServiceProvider {

    register() {
        container.singleton('auth', () => new Authenticator(Credential, bcrypt));
    }
};