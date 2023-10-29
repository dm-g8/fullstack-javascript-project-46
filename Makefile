install: # установка всех проектных зависимостей
	npm ci

lint: # запуск eslint
	npx eslint .

test: # запуск тестов вместо npx jest проводить через NODE_OPTIONS=--experimental-vm-modules npx jest 
	NODE_OPTIONS=--experimental-vm-modules npx jest

gendiff: # запуск исполняемого файла проекта
	node bin/gendiff.js