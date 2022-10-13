const { response } = require('express');
const con = require('../dao/dbsol');

const criarSol = (req, res) => {
    let nSol = req.body.n_sol;
    let depto = req.body.depto;
    let func = req.body.func;
    let prod = req.body.prod;
    let qtde = req.body.qtde;
    let total = req.body.total;
    let string = `call solicita_um_item(${nSol}, ${depto}, ${func}, ${prod}, ${qtde}, ${total})`;
    con.query(string, (err, result) => {
        if (err == null) {
            res.status(201).json(result).end();
        } else {
            res.status(400).json(err).end();
        }
    });
}

const listarSols = (req, res) => {
    let string = `select * from vw_solicitacoes`;
    con.query(string, (err, result) => {
        if (err == null) {
            res.status(201).json(result).end();
        } else {
            res.status(400).json(err).end();
        }
    });
}

const listarProdMes = (req, res) => {
    let anomes = req.params.anomes
    let string = `select * from vw_solicitacoes where Data_sol like '${anomes}%'`
    con.query(string, (err, result) => {
        if (err == null) {
            res.status(201).json(result).end();
        } else {
            res.status(400).json(err).end();
        }
    });
}

const listarTotalFunc = (req, res) => {
    let nomeFunc = req.params.nome
    let string = `select * from vw_solicitacoes where Nome_Func like '%${nomeFunc}%'`
    con.query(string, (err, result) => {
        if (err == null) {
            res.status(201).json(result).end();
        } else {
            res.status(400).json(err).end();
        }
    });
}

const listarProdDepto = (req, res) => {
    let prodNome = req.params.prodNome
    let string = `select Nome_produto, Nome_Depto from vw_solicitacoes where Nome_produto like '%${prodNome}%' group by Nome_Depto`
    con.query(string, (err, result) => {
        if (err == null) {
            res.status(201).json(result).end();
        } else {
            res.status(400).json(err).end();
        }
    });
}

module.exports = {
    criarSol,
    listarSols,
    listarProdMes,
    listarTotalFunc,
    listarProdDepto
}