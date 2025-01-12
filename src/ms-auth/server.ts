import app from './app';
import lib from '../lib';
const {appConfig} = lib.config;

const port = appConfig.port() || 3000;
app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`);
});
