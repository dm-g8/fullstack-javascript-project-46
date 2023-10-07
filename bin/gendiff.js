#!/usr/bin/env node

import { program } from 'commander';

const command = () => {
};

program
  .version('0.0.2')
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
