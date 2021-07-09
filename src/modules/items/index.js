import express from 'express'
import itemController from './itemController';
import isAuth from '../../middlewares/isAuthenticated';

const Router = express.Router();


Router.get('/all-items',
    isAuth.isAuthenticated,
    itemController.loadAllItems);

Router.get('/categories',
isAuth.isAuthenticated,
itemController.loadCategories);

export default Router;