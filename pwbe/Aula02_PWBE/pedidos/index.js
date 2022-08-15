const express = require('express');
const mysql = require('mysql');
const app = express();
const bodyParser = require('body-parser')
const cors = require('cors')

const con = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    database: 'pedidos'
})

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(cors())
app.use(express.json());

app.post('/clientes',(req, res)=>{
        
    if (req.body.nome != null || req.body.sobrenome != null || req.body.endereco != null || req.body.tel != null) {
        let priNome = req.body.nome
        let sobrenome = req.body.sobrenome
        let endereco = req.body.endereco
        let tel = req.body.tel.split("\r\n")
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
    } else {
        res.json("Equivocou-se nos dados " + req.body.nome + " " + req.body.sobrenome + " " + req.body.endereco + " " + req.body.tel)
    }
        

} );

app.get('/clientes', (req, res) => {
    let string = `Select * from clientes`;
    con.query(string,(err, result)=>{
        if(err == null){
            res.json(result);
        }
    });
});

app.listen(3000, ()=>{
    console.log("Respondendo na porta 3000");
}); //postas acima de 1080
