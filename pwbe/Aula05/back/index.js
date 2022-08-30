const express = require("express")
const cors = require("cors")
const mysql = require("mysql")
const bodyParser = require("body-parser")

const conDB = mysql.createConnection({
    "host": "localhost",
    "user": "root",
    "database": "lojinha"
})

const app = express()
app.set(express.json())
app.use(cors())

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get("/produtos", (req,res) =>{
    let query = "select * from produtos"

    conDB.query(query, (err,result) =>{
        if (err == null) {
            res.json(result).status(200).end()
        } else {
            res.json(err).status(400).end()
        }
    })
})

app.post("/produtos", (req, res) =>{
    let query = `INSERT INTO produtos VALUES (DEFAULT, '${req.body.cod}', '${req.body.nome}', ${req.body.qntd}, ${req.body.preco})` 
    conDB.query(query, (err, result) => {
        if(err == null){
            res.status(201).json(req.body).end()
        } else {
            res.status(400).json(err).end()
        }
    })
})

app.get("/produtos/:cod", (req,res) => {
    let query = `SELECT * FROM produtos WHERE cod='${req.params.cod}';`
    conDB.query(query, (err, result) =>{
        if (err == null) {
            res.status(201).json(result).end()
        } else {
            res.status(400).json(err).end()
        }
    })
})

app.listen(5000, () =>{
    console.log("Respondendo 5000")
})