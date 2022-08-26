const express = require("express");
const mysql = require("mysql");
const cors = require("cors")

const app = express();

const con = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    database: 'academia'
});

app.get('/academia/alunos', (req, res) => {
    let string = "select * from vw_alunos";
    con.query(string,(err,result)=>{
        if (err==null) {
            res.json(result)
        } else {
            res.json(err)
        }
    })
})

app.get('/academia/aparelhos', (req, res) => {
    let string = "select * from aparelhos";
    con.query(string,(err,result)=>{
        if (err==null) {
            res.json(result)
        } else {
            res.json(err)
        }
    })
})

app.get('/academia/exercicios', (req, res) => {
    let string = "select * from exercicios";
    con.query(string,(err,result)=>{
        if (err==null) {
            res.json(result)
        } else {
            res.json(err)
        }
    })
})

app.get('/academia/fichas', (req, res) => {
    let string = "select * from fichas";
    con.query(string,(err,result)=>{
        if (err==null) {
            res.json(result)
        } else {
            res.json(err)
        }
    })
})

app.listen(5000, () => {
    console.log("Respondendo a porta 5000")
})