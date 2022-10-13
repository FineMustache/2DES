const con = require('../dao/dbsol');

const criarDep = (req, res) => {
    let cod = req.body.cod_depto;
    let nome = req.body.nome_depto;
    let string = `insert into Departamentos values (${cod},'${nome}')`;
    con.query(string, (err, result) => {
        if (err == null) {
            res.status(201).json(req.body).end();
        } else {
            res.status(400).json(err).end();
        }
    });
}

const excluirDep = (req, res) => {
    let cod = req.body.cod_depto;
    let string = `delete from Departamentos where Cod_Depto = ${cod}`;
    con.query(string, (err, result) => {
        if (err == null) {
            res.status(201).send("Sucesso").end();
        } else {
            res.status(400).json(err).end();
        }
    });
}

module.exports = {
    criarDep,
    excluirDep
}