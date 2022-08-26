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
            let id
            let repIndex = []
            result.forEach(c => {
                c.telefone = [c.telefone]
                if (result.indexOf(c) > 0) {
                    if (id == c.id_cliente) {
                        result[(result.indexOf(c)-1)].telefone.forEach(tele => {
                            c.telefone.push(tele)
                        });

                        repIndex.push(result.indexOf(c)-1)
                    }
                }
                tel = c.telefone
                id = c.id_cliente
            });
            repIndex.forEach(ind => {
                result.splice(ind, 1)
            });
            res.json(result)
        } else {
            res.json(err)
        }
    })
})

app.listen(5000, () => {
    console.log("Respondendo a porta 5000")
})