import jsf from 'json-schema-faker';
import {schema} from './mockSchema';
import fs from 'fs';
import chalk from 'chalk';

const users = JSON.stringify(jsf(schema));

fs.writeFile('./src/api/db.json', users, err => {
    if(err)
        console.log(chalk.red(err)); //eslint-disable-line no-console
    else
        console.log(chalk.green("Mock Data generateds")); //eslint-disable-line no-console
    
});

