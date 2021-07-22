import express from 'express';

import subscriptionController from './subscriptionController';
import isAuth from '../../middlewares/isAuthenticated';
import Mpesa from '../../middlewares/Mpesa';

const Router = express.Router()


Router.post(
    '/subscribe',
    isAuth.isAuthenticated,
    // Mpesa.getAuthOToken,
    subscriptionController.createSubscription
)

export default Router;