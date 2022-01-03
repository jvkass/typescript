## Dependencias utilizadas

yarn add express

yarn add @type/express -D

yarn add typescript -D

yarn tsc --init

## Executar o tsc

Ao executar o tsc, é criado uma arquivo js que seja mais amigavel para a execução no Node.js, para mudar o diretorio é necessário mudar no tsconfig a linha do outDir como no exemplo a baixo:

- "outDir": "./dist",

Agora com o diretorio correto, podemos executar:

yarn tsc 

node dist/server.js

