import { action } from '../action';

import AuthController from './controllers/auth/AuthController';

export default (router) => {

    router.post('/login', action(AuthController, 'login'));
}