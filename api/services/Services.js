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

    async atualizaRegistro(dadosAtualizados, id) {

    }

    async apagaRegistro(id) {

    }

}

module.exports = Services