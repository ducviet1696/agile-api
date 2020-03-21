import { Success } from '../services/http/message';

export default (router) => {

    router.get('/', (context) => {
        context.body = new Success({ message: 'hello!' });
    });
}