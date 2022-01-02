const { Router } = require('express')
const PessoasController = require('../controllers/PessoaController')

const router = Router()

router.get('/pessoas', PessoasController.pegaTodasAsPessoas)
router.get('/pessoas/:id', PessoasController.pegaUmaPessoa)
router.post('/pessoas', PessoasController.criaPessoa)

module.exports = router