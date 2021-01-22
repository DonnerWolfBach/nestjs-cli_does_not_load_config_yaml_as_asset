
import { readFileSync } from 'fs';
import * as yaml from 'js-yaml';
import { join } from 'path';

const YAML_CONFIG_FILENAME = 'config.yml';

export default () => {
    const config = yaml.load(
        readFileSync(join(__dirname, YAML_CONFIG_FILENAME), 'utf8'),
      )

  return config as object; //this is necessary, so that this file fullfils the API
};