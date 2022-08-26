const express = require("express");
const mysql = require("mysql");

const app = express();

const con = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    database: 'onibus'
});

app.get('/onibus/motoristas', (req, res) => {
    let string = "select * from vw_motoristas";
    con.query(string,(err,result)=>{
        if (err==null) {
            res.json(result)
        } else {
            res.json(err)
        }
    })
})

app.get('/onibus/horarios', (req, res) => {
    let string = "select * from horarios";
    con.query(string,(err,result)=>{
        if (err==null) {
            res.json(result)
        } else {
            res.json(err)
        }
    })
})

app.get('/onibus/linhas', (req, res) => {
    let string = "select * from linhas";
    con.query(string,(err,result)=>{
        if (err==null) {
            res.json(result)
        } else {
            res.json(err)
        }
    })
})

app.get('/onibus/mot_linha', (req, res) => {
    let string = "select * from mot_linha";
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