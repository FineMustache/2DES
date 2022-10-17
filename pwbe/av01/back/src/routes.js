const express = require('express');
const router = express.Router();

const Prod = require("./controllers/ProdController");
const Depto = require("./controllers/DeptoController");
const Sol = require("./controllers/SolController");

router.get("/solicitacoes/produtos", Prod.listarProdutos);
router.post("/solicitacoes/produtos", Prod.criarProduto);

router.post("/solicitacoes/depto", Depto.criarDep);
router.delete("/solicitacoes/depto", Depto.excluirDep);
router.get("/solicitacoes/depto", Depto.listarDeptos);

router.post("/solicitacoes/solicitacoes", Sol.criarSol);
router.get("/solicitacoes/solicitacoes", Sol.listarSols);
router.get("/solicitacoes/prodmes/:anomes", Sol.listarProdMes);
router.get("/solicitacoes/totalfunc/:nome", Sol.listarTotalFunc);
router.get("/solicitacoes/proddepto/:prodNome", Sol.listarProdDepto);

module.exports = router;