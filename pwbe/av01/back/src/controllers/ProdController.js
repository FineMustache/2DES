const con = require('../dao/dbsol');

const criarProduto = (req, res) => {
    let cod = req.body.cod_produto;
    let nome = req.body.nome_produto;
    let string = `insert into Produtos values (${cod},'${nome}')`;
    con.query(string, (err, result) => {
        if (err == null) {
            res.status(201).json(req.body).end();
        } else {
            res.status(400).json(err).end();
        }
    });
}

const listarProdutos = (req, res) => {
    let string = "select * from produtos";
    con.query(string, (err, result) => {
        if (err == null) {
            res.json(result).end();
        }
    });
}

module.exports = {
    criarProduto,
    listarProdutos
}