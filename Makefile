install: # установка всех проектных зависимостей
	npm ci

lint: # запуск eslint
	npx eslint .

test: # запуск тестов вместо npx jest проводится в .npmrc через NODE_OPTIONS=--experimental-vm-modules npx jest 
	npx jest

gendiff: # запуск исполняемого файла проекта
	node bin/gendiff.js