#!/usr/bin/env node

import { program } from 'commander';

const command = () => {
  console.log('Проверка запуска исполняемого файла');
};

program
  .version('0.0.1')
  .action(command)
  .description('Compares two configuration files and shows a difference.')

  .parse(process.argv);
