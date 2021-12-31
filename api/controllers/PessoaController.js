// Primeiro, antes de começarmos a trabalhar, devemos lembrar de importar tudo o que precisamos para esse arquivo. Se o controlador vai se conectar com o modelo, precisamos passar para ele onde estão nossos modelos. Então vou criar essa const chamada database e dentro dela usarei o require para puxar os arquivos de modelo. O código fica: const database = require(‘../models’). O /models fica entre aspas por ser uma string.

const data = require('../models'); // Quando escrevemos dessa forma, por padrão, o JavaScript já vai dentro da pasta “modelos” e procura um arquivo chamado index, então não precisamos escrever models/index.js, só models ele já acha.

class PessoaController {
    static async pegaTodasAsPessoas(req, res) {
        try {
            const todasAsPessoas = await database.Pessoas.findAll()
            return res.status(200).json(todasAsPessoas)
        } catch (error) {
            return res.status(200).json(error.message)
        }
    }
}