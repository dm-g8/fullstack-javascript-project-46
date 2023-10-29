// import fs from 'node:fs';
import gendiff from '../index.js';

test('testing index.js step 4', () => {
  expect(gendiff('__tests__/file1.json', '__tests__/file2.json')).toMatch(
    '{\n  - follow: false\n    host: hexlet.io\n  - proxy: 123.234.53.22\n  - timeout: 50\n  + timeout: 20\n  + verbose: true\n}',
  );
});
