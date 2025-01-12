import app from './app';
import lib from '@org/lib';
const {appConfig} = lib.config;

const port = appConfig.port() || 3001;
app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`);
});
