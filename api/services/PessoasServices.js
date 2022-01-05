const Services = require('./Services')
const database = require('../models')

class PessoasServices extends Services {
    constructor() {
        super('Pessoas')
    }

    async pegaRegistrosAtivos(where = {}) {
        return database[this.nomeDoModelo].findAll({ where: {...where } }) // Agora findAll vai funcionar tanto se where não tiver nada, for um objeto vazio, vai funcionar da mesma forma que se não estivesse passando parâmetro nenhum, mas agora posso utilizar esse método para passar parâmetros dentro do findAll como where, coluna x tem tal valor, etc.
    }

    async pegaTodosOsRegistros(where = {}) {
        return database[this.nomeDoModelo]
            .scope('todos')
            .findAll({ where: {...where } }) //Se recebeu where, qualquer tipo de informação de dado para ele selecionar ele vai receber, senão vai funcionar findAll com where vazio.
    }
}

module.exports = PessoasServices