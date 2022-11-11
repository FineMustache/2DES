const mysql = require('mysql');

const conDB = mysql.createConnection({
    "host": "localhost",
    "user": "root",
    "database": "estacionamento"
});

function listarClientes(req, res) {
    let query = "SELECT * FROM clientes";

    conDB.query(query, (err, result) => {
        if(err == null) {
            res.json(result).status(200).end();
        }else {
            res.json(err).status(400).end();
        }
    })
};

function listarCliente(req, res) {
    let query = `SELECT * FROM clientes WHERE id = ${req.params.id}`;

    conDB.query(query, (err, result) => {
        if(err == null) {
            res.json(result).status(200).end();
        }else {
            res.json(err).status(400).end();
        }
    })
};


function cadastrarCliente(req, res) {
    let query = `INSERT INTO clientes VALUES(DEFAULT, '${req.body.nome}', '${req.body.telefone}', '${req.body.endereco}')`;

    conDB.query(query, (err, result) => {
        if(err == null) {
            res.json(req.body).status(200).end();
        }else {
            res.json(err).status(400).end();
        }
    })
};

function excluirCliente(req, res) {
    let query = `DELETE FROM clientes WHERE id = ${req.body.id}`;

    conDB.query(query, (err, result) => {
        if(err == null) {
            res.json(req.body).status(200).end();
        }else {
            res.json(err).status(400).end();
        }
    })
};

module.exports = {
    listarClientes,
    listarCliente,
    cadastrarCliente,
    excluirCliente
}