function carregar() {
    const options = {method: 'GET'};

    fetch('http://localhost:5000/solicitacoes/produtos', options)
    .then(response => response.json())
    .then(response => {
        response.forEach(prod => {
            console.log(prod)
            let model = document.querySelector(".modelo").cloneNode(true)
            model.querySelector("#codProd").innerHTML = prod.Cod_Produto
            model.querySelector("#nomeProd").innerHTML = prod.Nome_produto
            model.id = prod.Cod_Prod
            model.classList.remove("modelo")
            document.querySelector("tbody").appendChild(model)
        });

        
    })
    .catch(err => console.error(err));
}

function toggleModal() {
    document.querySelector(".modal").classList.toggle("escondido")
}

function cadastrar() {

    let data = JSON.stringify({
        'cod_produto': document.querySelector("#codProdInp").value,
        'nome_produto': document.querySelector("#nomeProdInp").value,
    })
    const options = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: data
      };
      
      fetch('http://localhost:5000/solicitacoes/produtos', options)
        .then(response => response.json())
        .then(response => {
            console.log(response)
            if (response.cod_produto !== undefined) {
                toggleModal(0)
                let model = document.querySelector(".modelo").cloneNode(true)
                document.querySelector("tbody").innerHTML=""
                document.querySelector("tbody").appendChild(model)
                carregar()
            }
        })
        .catch(err => console.error(err));
}