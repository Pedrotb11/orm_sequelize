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

//instalei o sequelize e o sequelize-cli que é o sequelize de terminal
//rodando no terminal o "npx sequelize-cli init" cria um banco vazio para você. Esse "npx" é pra rodar as dependências que estão instaladas localmente, uma vez que as coisas que a gente instalou anteriormente, a gente não instalou de forma global. tendo rodado, ele criou vários diretórios como config, migrations, models e seeders.

//Há porém um problema, a gente criou uma pasta api para passar os arquivos da nossa aplicação dentro, porém como estamos rodando os comandos direto na raiz do projeto, a gente vai precisar passar os arquivos que o sequelize criou na raiz pra dentro da nossa pasta.

//Agora, como a gente mudou as coisas de lugar, precisamos avisar o Sequelize para ele não ficar perdido. Então vamos criar um arquivo chamado .sequelizerc, que inclusive está previsto na documentação do sequelize, e passar uma parte do código que tem lá, sem passar o babel, que não vamos utilizar por enquanto. lá deve estar passando os novos caminhos das pastas, que nesse caso é './api/nomde-da-pasta'.

//Se você utiliza Linux e está com problemas para fazer o Sequelize acessar o banco (o erro de “acesso negado ao usuário 'root'@'localhost'”), como vimos no vídeo, você pode criar um novo usuário para este projeto com os comandos:

//mysql> CREATE USER '[seu nome de usuário]'@'localhost' IDENTIFIED BY '[sua senha]';

//Em seguida, dê ao novo usuário privilégios:

//GRANT ALL PRIVILEGES ON * . * TO '[seu nome de usuário]'@'localhost';

//Por último, rode o comando: FLUSH PRIVILEGES; para recarregar as permissões.