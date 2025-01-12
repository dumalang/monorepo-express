import dotenv from 'dotenv';
import express, {Express} from 'express';
import bodyParser from 'body-parser';
import lib from '@org/lib';
const {appConfig} = lib.config;

dotenv.config();

const app: Express = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res) => {
  res.send({
    serviceName: appConfig.name()
  });
});

export default app;
