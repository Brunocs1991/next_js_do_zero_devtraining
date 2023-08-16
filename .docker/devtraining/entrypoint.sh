#!/bin/sh

# Navegar para o diretório anterior (../app/)
cd ../app/

# Executar os comandos no diretório atual (../app/)
npm install
npm run build
npx typeorm migration:run -d dist/database.providers.js
npm run start:dev
