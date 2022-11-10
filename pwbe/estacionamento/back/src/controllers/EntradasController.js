const mysql = require('mysql');

const conDB = mysql.createConnection({
    "host": "localhost",
    "user": "root",
    "database": "estacionamento"
});

function listarEntradas(req, res) {
    let query = "SELECT * FROM vw_entradas";

    conDB.query(query, (err, result) => {
        if(err == null) {
            res.json(result).status(200).end();
        }else {
            res.json(err).status(400).end();
        }
    })
};

function listarEntrada(req, res) {
    let query = `SELECT * FROM vw_entradas where data_saida IS null AND vaga = '${req.params.id_vaga}'`;

    conDB.query(query, (err, result) => {
        if(err == null) {
            res.json(result).status(200).end();
        }else {
            res.json(err).status(400).end();
        }
    })
};

function cadastrarEntrada(req, res) {
    let query = `INSERT INTO entradas VALUES(DEFAULT, ${req.body.id_cliente}, '${req.body.placa}', '${req.body.id_vaga}', curtime(), null, null)`;

    conDB.query(query, (err, result) => {
        if(err == null) {
            res.json(req.body).status(200).end();
        }else {
            res.json(err).status(400).end();
        }
    })
};

function editarEntrada(req, res){
    let query = `UPDATE entradas SET data_saida = curtime(), valor = ${req.body.valor} where id_entrada = ${req.body.id}`;

    conDB.query(query, (err, result) => {
        if(err == null) {
            res.json(req.body).status(200).end();
        }else {
            res.json(err).status(400).end();
        }
    })
}


module.exports = {
    listarEntradas,
    cadastrarEntrada,
    editarEntrada,
    listarEntrada
}