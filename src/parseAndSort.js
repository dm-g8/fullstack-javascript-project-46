import _ from 'lodash';

const getSortParse = (file) => {
  const obj = JSON.parse(file);
  // функция алфавитной сортировки ключей в объекте
  const keys = Object.keys(obj);
  const sortBy = _.sortBy(keys);
  const sortedObj = {};
  sortBy.forEach((elem) => {
    sortedObj[elem] = obj[elem];
  });
  return sortedObj;
};
export default getSortParse;
