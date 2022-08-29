const express = require("express");
const mysql = require("mysql");
const cors = require("cors")

const app = express();

const con = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    database: 'academia'
});

app.use(cors())

app.get('/academia/alunos', (req, res) => {
    let string = "select * from vw_alunos";
    con.query(string,(err,result)=>{
        if (err==null) {
            let repReg = []
            let tel = []
            result.forEach(c => {
                if (result.indexOf(c) != (result.length -1)) {
                    if (result[(result.indexOf(c)+1)].id_aluno == c.id_aluno) {
                        console.log((result.indexOf(c)+1) + " - O proximo repete")
                        tel.push(c.telefone)
    
                        repReg.push(result[result.indexOf(c)+1])
                    } else if(result[(result.indexOf(c)-1)].id_aluno == c.id_aluno && result.indexOf(c) > 0) {
                        console.log((result.indexOf(c)+1) + " - Ultimo da repeticao")
                        tel.push(c.telefone)
                        result[result.indexOf(c)-(tel.length-1)].telefone = tel
                        tel = []

                    } else {
                        console.log((result.indexOf(c)+1) + " - Nao repete")

                        c.telefone = [c.telefone]
                        tel = []
                    }
                } else {
                    if ((result.indexOf(c)-1).id_aluno == c.id_aluno) {
                        console.log((result.indexOf(c)+1) + " - Ultimo da repeticao")
                        (result.indexOf(c)-1).telefone.push(c.id_aluno)

                        repReg.push(c)
                        tel.push(c.telefone)
                        result[result.indexOf(c)-(tel.length-1)].telefone = tel
                        tel = []
                    } else {
                        console.log((result.indexOf(c)+1) + " - Nao repete")
                        c.telefone = [c.telefone]
                        tel = []
                    }
                }
                

            });

            console.log(repReg)

            repReg.forEach(reg => {
                result.splice(result.indexOf(reg), 1)
            });
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