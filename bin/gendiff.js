#!/usr/bin/env node

import { program } from 'commander';
import gendiff from '../index.js';

const command = (filepath1, filepath2) => {
  console.log(gendiff(filepath1, filepath2));
};

program
  .version('0.0.3')
  .arguments('<filepath1>')
  .arguments('<filepath2>')
  .description('Compares two configuration files and shows a difference.')
  .option('-f, --format <type>', 'output format')
  .helpOption('-h, --help', 'output usage information')
  .configureHelp({
    sortOptions: true,
  })

  .action(command);

program.parse(process.argv);
