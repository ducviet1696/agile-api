export default router => {

    router.get('/', (context) => {
        return context.body = {
            message: 'hello',
        };
    });
}