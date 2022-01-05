const Services = require('./Services')
const database = require('../models')

class PessoasServices extends Services {
    constructor() {
        super('Pessoas')
        this.matriculas = new Services('Matriculas')
    }

    async pegaRegistrosAtivos(where = {}) {
        return database[this.nomeDoModelo].findAll({ where: {...where } }) // Agora findAll vai funcionar tanto se where não tiver nada, for um objeto vazio, vai funcionar da mesma forma que se não estivesse passando parâmetro nenhum, mas agora posso utilizar esse método para passar parâmetros dentro do findAll como where, coluna x tem tal valor, etc.
    }

    async pegaTodosOsRegistros(where = {}) {
        return database[this.nomeDoModelo]
            .scope('todos')
            .findAll({ where: {...where } }) //Se recebeu where, qualquer tipo de informação de dado para ele selecionar ele vai receber, senão vai funcionar findAll com where vazio.
    }

    async cancelaPessoaEMatriculas(estudanteId) { // O que ele tem que receber? A mesma coisa que por enquanto o método cancelaPessoa está recebendo no controlador, que é só estudanteId, porque através do estudanteId fazemos todas as outras alterações.O que ele vai precisar retornar? Ele vai retornar a transação inteira e dentro dela o que temos que fazer. Vou copiar a linha onde está escrito a transação:
        return database.sequelize.transaction(async transacao => { //vamos substituir esses updates pelos métodos que criamos dentro de services.js, atualizaRegistro e atualizaRegistros.
            await super.atualizaRegistro({ ativo: false }, estudanteId, {
                transaction: transacao
            })
            await this.matriculas.atualizaRegistros({ status: 'cancelado' }, { estudante_id: estudanteId }, { transaction: transacao })
        })
    }
}

module.exports = PessoasServices