import app from './app';
import {appConfig} from "../lib/config/app_config";

const port = appConfig.port || 3001;
app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`);
});
