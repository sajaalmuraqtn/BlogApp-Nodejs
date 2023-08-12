import express  from "express";
const app= express();
app.use(express.json());

import * as AuthController from './Controller/Auth.controller.js';

// for router methods

app.post('/signup',AuthController.signup);
app.post('/signIn',AuthController.signIn);

export default app;