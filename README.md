# Backend Bossabox Api

Api desenvolvida para o challenge backend da @bossabox ;)

## Como executar

Para executar o projeto em sua máquina, faça o clone ou download do zip deste repositório. Depois entre no diretório do projeto, e execute `yarn`. Caso esteja utilizando o npm, sem problemas, é só executar `npm install`.

A aplicação foi desenvolvida utilizando o banco de dados MongoDb,e você precisa ter o banco instalado em sua máquina. Caso não possua o banco de dados instalado, recomendo que utilize o docker para a isntalação. O Docker irá verificar se a imagem do Mongo imagem existe em sua máquina local. Caso não exista, ele irá realizar o download da imagem ofocial do Mongo do [DockerHub](https://hub.docker.com). Para realizar a instalação, execute `docker run --name bossabox -p 27017:27017 -d -t mongo`. Esse comando irá instalar o mongo em uma imagem com nome de `bossabox`. Você pode alterar esse nome se desejar. O banco de dados será redirecionado para a porta 27017 da sua máquina.

Após ter o banco de dados instalado em sua máquina, edite as configurações do arquivo `.env` de acordo com as suas preferências.

Depois do banco de dados instalado, e as variáveis de ambiente configuradas, execute `yarn start` ou `npm start`. A URL irá escutar no endereço: http://localhost:3000

## Documentação

A documentação da API se encontra no diretório `src/docs/docs.yaml`. Para visualizar a documentação da API, abra o site [Swagger Editor](https://editor.swagger.io/), arraste e solte o arquivo `docs.yaml` na página do site. Ele irá abrir a documentação com todas as rotas e métodos da API.
