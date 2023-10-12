import path from 'node:path';
// import {cwd} from 'node:process';
import fs from 'node:fs';
import getParse from './src/parser.js';

const gendiff = (filepath1, filepath2) => {
  // абсолютные пути
  const path1 = path.resolve(filepath1);
  const path2 = path.resolve(filepath2);
  // чтение файлов
  const readFile1 = fs.readFileSync(path1, { encoding: 'utf8' });
  const readFile2 = fs.readFileSync(path2, { encoding: 'utf8' });
  // после парсинга
  const pars1 = getParse(readFile1);
  const pars2 = getParse(readFile2);
  return { pars1, pars2 };
};

export default gendiff;
