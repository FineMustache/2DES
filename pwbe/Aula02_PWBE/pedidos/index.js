const express = require('express');
const mysql = require('mysql');
const app = express();

const con = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    database: 'pedidos'
})

app.use(express.json());

app.get('/pedidos',(req, res)=>{

    let priNome = req.query.nome
    let sobrenome = req.query.sobrenome
    let endereco = req.query.endereco
    let tel = req.query.tel.split("\r\n")
    let string = `insert into clientes value(null,'${priNome}','${sobrenome}','${endereco}')`
    con.query(string,(err,result,fields)=>{
        if (err == null) {
            var deuruim = false
            for (let index = 0; index < tel.length; index++) {
                let stringTel = `insert into telefones value('${result.insertId}', '${tel[index]}')`
                con.query(stringTel,(err)=>{
                    if (err == null) {

                    } else {
                        deuruim = true
                    }
                })
                
            }

            if (deuruim) {
                    res.json("Dados recebidos com sucesso, porém não conseguimos enviar para o nosso Banco de Dados. Erro: " + err)
            } else {
                    res.json("Dados recebidos com sucesso, estamos enviando para o Banco de Dados")
            }
            
        } else {
            res.json("Dados recebidos com sucesso, porém não conseguimos enviar para o nosso Banco de Dados. Erro: " + err)
        }
    })
} );
app.listen(3000, ()=>{
    console.log("Respondendo na porta 3000");
}); //postas acima de 1080
