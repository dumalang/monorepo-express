import {env} from "../utils/env";

const appConfig = {
  name: () => env('APP_NAME', 'APP_NAME'),
  port: () => env('APP_PORT', '3000'),
}

export {
  appConfig
};
