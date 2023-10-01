install: # установка всех проектных зависимостей
	npm ci

test: # запуск тестов
	npm test

lint: # запуск eslint
	npx eslint .

gendiff: # запуск исполняемого файла проекта
	node bin/gendiff.js