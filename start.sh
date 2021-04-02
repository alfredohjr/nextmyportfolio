#!/bin/bash

git pull

echo "sincronizando as bibliotecas!"
yarn

echo "gerando o build do projeto"
yarn build

yarn start -p 3000
