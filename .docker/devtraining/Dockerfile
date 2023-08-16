FROM node:lts-alpine3.18

RUN apk add --no-cache bash

RUN npm install -g @nestjs/cli

WORKDIR /home/node/app

# Copia o arquivo .entrypoint.sh para o diretório /home/node/app
COPY entrypoint.sh /home/node/scripts/entrypoint.sh

# Concede permissões de execução para o arquivo .entrypoint.sh
RUN chmod +x /home/node/scripts/entrypoint.sh

