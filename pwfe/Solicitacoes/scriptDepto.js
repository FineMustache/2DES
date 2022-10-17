function carregar() {
    const options = {method: 'GET'};

    fetch('http://localhost:5000/solicitacoes/depto', options)
    .then(response => response.json())
    .then(response => {
        response.forEach(depto => {
            console.log(depto)
            let model = document.querySelector(".modelo").cloneNode(true)
            model.querySelector("#codDepto").innerHTML = depto.Cod_Depto
            model.querySelector("#nomeDepto").innerHTML = depto.Nome_Depto
            model.id = depto.Cod_Depto
            model.classList.remove("modelo")
            document.querySelector("tbody").appendChild(model)
        });

        
    })
    .catch(err => console.error(err));
}

function excluir(id) {
    const options = {
        method: 'DELETE',
        headers: {'Content-Type': 'application/json'},
        body: `{"cod_depto":${id}}`
      };
      
      fetch('http://localhost:5000/solicitacoes/depto', options)
        .then(response => response.json())
        .then(response => {
            if(response.message !== undefined){
                toggleModal(0)
                let model = document.querySelector(".modelo").cloneNode(true)
                document.querySelector("tbody").innerHTML=""
                document.querySelector("tbody").appendChild(model)
                carregar()
            }
        })
        .catch(err => console.error(err));
}

function toggleModal(id, name) {
    document.querySelector(".modal").classList.toggle("escondido")
    document.querySelector(".btn").value = id
    document.querySelector("#nomeDeptoMod").innerHTML = name
    console.log(name)
}