import { container } from '@fusion.io/container';

export const action = (controller, action) => {

    container.autoSingleton(controller);
    return async (context, next) => {
        const controllerInstance = container.make(controller);
        return await controllerInstance[ action ](context, next);
    };
};