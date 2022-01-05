// É essa a responsabilidade de conectar com a database e processar esses dados que vai receber, enviar, etc, que vamos tirar dos controladores e passar para camada services, que vai ficar entre o controlador e o modelo, digamos assim.

const database = require('../models')

class Services {
    constructor(nomeDoModelo) {
        this.nomeDoModelo = nomeDoModelo
    }

    async pegaTodosOsRegistros() {
        return database[this.nomeDoModelo].findAll()
    }

    async pegaUmRegistro(id) {

    }

    async criaRegistro(dados) {

    }

    async atualizaRegistro(dadosAtualizados, id, transacao = {}) { // Vamos conseguir usar atualizaRegistro com ou sem transação, porque se não tiver nenhuma transação o sequelize não vai passar isso para frente,
        return database[this.nomeDoModelo]
            .update(dadosAtualizados, { where: { id: id } }, transacao) // e se tiver ele vai passar com as informações que ele vai receber do call-back de sequelize.transaction.
    }

    async atualizaRegistros(dadosAtualizados, where, transacao = {}) { //esse método atualizaRegistro que atualiza um registro baseado no id, vamos precisar também de um um pouco mais específico, que receba um where e aí faça alteração de todas as linhas onde where se aplica.
            return database[this.nomeDoModelo]
                .update(dadosAtualizados, { where: {...where } }, transacao)
        } // ao invés de um id único ele vai receber um where. Então vou passar o where como parâmetro. A única alteração que vamos fazer no update é que ao invés do where receber um id:id ele vai receber um spread de where. Como vamos usar esse método? Vamos passar como parâmetro do where o objeto onde ele vai montar as condições do where onde ele vai procurar os registros nas tabelas e fazer as atualizações.

    async apagaRegistro(id) {

    }

}

module.exports = Services