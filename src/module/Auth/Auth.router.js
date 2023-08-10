import express  from "express";
const app= express();
app.use(express.json());

import * as AuthController from './Controller/Auth.controller.js';

// for router methods

app.get('/getAuth',AuthController.getAuth);

export default app;