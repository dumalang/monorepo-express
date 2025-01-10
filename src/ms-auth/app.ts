import dotenv from 'dotenv';
import express, {Express} from 'express';
import bodyParser from 'body-parser';
import {appConfig} from "../lib/config/app_config";

dotenv.config();

const app: Express = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res) => {
  res.send({
    serviceName: appConfig,
  });
});

export default app;
