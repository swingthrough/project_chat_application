import configLocal from './local.json';
import configProd from './prod.json';

let config;

if (process.env.REACT_APP_API === 'production') {
  config = configProd;
} else if (process.env.REACT_APP_API === 'local') {
  config = configLocal;
} else {
  config = configLocal;
}

export default config;
