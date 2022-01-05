//usando o index.js como ponto de entrada para esses arquivos conforme forem chamados.

const PessoasServices = require('./PessoasServices')
const TurmasServices = require('./TurmasServices')
const NiveisServices = require('./NiveisServices')

module.exports = {
    PessoasServices: PessoasServices,
    TurmasServices: TurmasServices,
    NiveisServices: NiveisServices
}