const produtos = document.querySelector(".produtos");
const produto = document.querySelector(".model")

fetch("http://localhost:5000/produtos")
.then(resp => {return resp.json()})
.then(produtos => {
    produtos.forEach(produto => {
        duplicarProduto(produto)
    })
})

function cadastrar() {
    let cod = document.querySelector("#inpCod").value
    let nome = document.querySelector("#inpNome").value
    let qntd = document.querySelector("#inpQntd").value
    let preco = document.querySelector("#inpPreco").value

    let data = JSON.stringify({
        "cod": cod,
        "nome": nome,
        "qntd": qntd,
        "preco": preco
    })

    fetch("http://localhost:5000/produtos", {
        "method": "POST",
        "headers": {
            "Content-Type": "application/json"
        },
        "body": data
    })
    .then(resp=> {return resp.json()})
    .then(data => {
        duplicarProduto(data);
        showModal();
    })


    console.log(data)
}

function showModal() {
    document.querySelector(".modal").classList.toggle("model")
}

function duplicarProduto(info) {
    let nProd = produto.cloneNode(true);

    nProd.classList.remove("model");

    nProd.querySelector("#nome").innerHTML = info.nome
    nProd.querySelector("#preco").innerHTML = "R$ " + info.preco

    produtos.appendChild(nProd);
}