#!/usr/bin/env node

import { program } from 'commander';

const command = () => {
};

program
  .version('0.0.1')
  .action(command)
  .description('Compares two configuration files and shows a difference.')
  .parse(process.argv);
