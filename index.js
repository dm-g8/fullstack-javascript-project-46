import path from 'node:path';
import { cwd } from 'node:process';
import fs from 'node:fs';
import _ from 'lodash';
import getSortParse from './src/parseAndSort.js';

// функция создает абсолютный путь к файлам с учетом директории __fixtures__
const getFixturePath = (filename) => path.resolve(cwd(), filename);
const gendiff = (filepath1, filepath2) => {
  // абсолютные пути
  const path1 = getFixturePath(filepath1);
  const path2 = getFixturePath(filepath2);
  // чтение файлов
  const readFile1 = fs.readFileSync(path1, { encoding: 'utf8' });
  const readFile2 = fs.readFileSync(path2, { encoding: 'utf8' });
  // после парсинга
  const pars1 = getSortParse(readFile1);
  const pars2 = getSortParse(readFile2);
  // массивы ключей сортированных объектов
  const keys1 = Object.keys(pars1);
  const keys2 = Object.keys(pars2);
  // объединение единый массив
  const keys3 = [...keys1, ...keys2];
  // удаление повторов
  const finalKeys = _.sortBy(_.uniq(keys3));
  // вывод результата сравнения
  let result = '\n';
  finalKeys.forEach((elem) => {
    if (keys1.includes(elem) && keys2.includes(elem) && pars1[elem] === pars2[elem]) {
      result += `    ${elem}: ${pars1[elem]}\n`;
    } else if (keys1.includes(elem) && keys2.includes(elem) && pars1[elem] !== pars2[elem]) {
      result += `  - ${elem}: ${pars1[elem]}\n  + ${elem}: ${pars2[elem]}\n`;
    } else if (keys1.includes(elem) && !keys2.includes(elem)) {
      result += `  - ${elem}: ${pars1[elem]}\n`;
    } else if (!keys1.includes(elem) && keys2.includes(elem)) {
      result += `  + ${elem}: ${pars2[elem]}\n`;
    }
  });
  return `{${result.trimEnd()}\n}`;
};

export default gendiff;
