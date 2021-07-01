import auth from './auth';
import profile from './profile';
import subscriptions from './subscriptions';

const apiPrefix = '/api/v1';

const routes = (app) => {
    app.use(apiPrefix, auth);
    app.use(apiPrefix, profile);
    app.use(apiPrefix, subscriptions);
    return app;
}

export default routes;