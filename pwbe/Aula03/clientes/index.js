const express = require("express");
const mysql = require("mysql");
const cors = require("cors")

const app = express();

const con = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    database: 'clientes'
});

app.get('/clientes', (req, res) => {
    let string = "select * from vw_clientes";
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