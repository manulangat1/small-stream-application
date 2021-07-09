import auth from './auth';
import profile from './profile';
import subscriptions from './subscriptions';
import Items from './items'
const apiPrefix = '/api/v1';

const routes = (app) => {
    app.use(apiPrefix, auth);
    app.use(apiPrefix, profile);
    app.use(apiPrefix, subscriptions);
    app.use(apiPrefix, Items);
    return app;
}

export default routes;