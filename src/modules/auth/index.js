import express from 'express';

import AuthController from './authController';
import multer from 'multer'

const upload = multer({dest:'uploads/'})
const Router = express.Router();

Router.post(
    '/register',
    upload.single('image'),
    AuthController.createUser
);

Router.post(
    '/login',
    AuthController.loginUser
);

Router.post(
    '/confirm-email',
    AuthController.confirmEmail
);

Router.post(
    '/forgot-password',
    AuthController.forgotPassword
);

Router.put(
    '/reset-password',
    AuthController.resetPassword
);

export default Router;