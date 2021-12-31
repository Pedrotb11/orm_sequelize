const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

const port = 3000;

app.get('/teste', (req, res) => res
    .status(200)
    .send({ mensagem: 'boas vindas a API' })
);

app.listen(port, () => console.log(`Servidor está rodando na porta ${port}`));

module.exports = app;

//vamos agora criar o nosso banco com o nome "escola_ingles", e pra isso vamos rodar o "mysql -u root -p"no terminal, e "create database escola_ingles;"

//agora a gente tem que avisar a aplicação que existe um banco sql e quem a gente tem que se conectar com ele. Então a gente vai no api/config/config.json e troca os dados que tem lá, pelos dados do nosso banco. lembrando que vamos preencher apenas o de "development", que é o que vamos trabalhar por enquanto

//Na pasta index.js, está sendo checado o ambiente que fazemos; por enquanto, de desenvolvimento, pegando essas configurações, que estão no arquivo config.json, e essas informações são utilizadas para criar uma nova instância de Sequelize. A partir disso, o Sequelize, usando o file system (fs), percorrerá todos os modelos que criarmos e que estarão dentro da pasta index.js. E aí fazer as associações, conectar ao banco etc.