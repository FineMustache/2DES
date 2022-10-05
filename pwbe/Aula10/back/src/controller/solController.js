const Item = require('../models/solicitacao');
const con = require('../models/solicitacaoDAO');

const listarItens = (req, res) => {
    con.query(Item.toReadAll(), (err, result) => {
        if (err == null)
            res.json(result).end();
        else
            res.status(500).end();
    });
}

const criarItem = (req, res) => {
    con.query(Item.toCreate(req.body), (err, result) => {
        if (err == null)
            res.status(201).end();
        else
            if (err.sqlState == 23000)//Se o n_sol já está cadastrado
                res.status(406).json(err).end();
            else
                res.status(500).json(err).end();
    });
}



module.exports = {
    criarItem,
    listarItens
}