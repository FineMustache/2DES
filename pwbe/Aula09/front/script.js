function carregar() {
    const options = {method: 'GET'};

    fetch('http://localhost:5000/patrimonio/itens', options)
    .then(response => response.json())
    .then(data => {
        data.forEach(item => {
            let modelo = document.querySelector(".item").cloneNode(true)
            modelo.querySelector(".delete").id = item.ni
            modelo.querySelector("#sni").innerHTML = item.ni
            modelo.querySelector("#sda").innerHTML = item.aquisicao.split('T')[0]
            modelo.querySelector("#sdeno").innerHTML = item.denominacao
            modelo.querySelector("#svl").innerHTML = item.valor
            modelo.querySelector("#itImg").src = "./assets/" + item.img

            modelo.classList.remove("escondido")

            document.querySelector(".page").appendChild(modelo)
        });
    })
    .catch(err => console.error(err));

    
}

function cadastrar() {
    const ni = document.querySelector("#ni")
    const aq = document.querySelector("#aq")
    const deno = document.querySelector("#deno")
    const vl = document.querySelector("#vl")

    var item = {
        "ni": ni.value,
        "aquisicao": aq.value,
        "denominacao": deno.value,
        "valor": vl.value,
        "img": "default.png"
    }

    fetch("http://localhost:5000/patrimonio/itens",{
        "method":"POST",
        "headers":{
            "Content-Type":"application/json"
        },
        "body":JSON.stringify(item)
    })
    .then(response => response)
    .then(data => {
        toggleModal()

        let modelo = document.querySelector(".item")

        document.querySelector(".page").innerHTML = ""
        document.querySelector(".page").appendChild(modelo)

        carregar()
    })
    .catch(err => console.error(err));

    
}

function toggleModal() {
    document.querySelector(".modal").classList.toggle("escondido")
}

function deleteItem(ni) {
    if (confirm("Confirma a exclusão do item?")) {
        const options = {method: 'DELETE', headers: {'Content-Type': 'application/json'}, body: JSON.stringify({})};

        fetch(`http://localhost:5000/patrimonio/itens/${ni}`, options)
        .then(response => response)
        .then(response => {
            let modelo = document.querySelector(".item")

            document.querySelector(".page").innerHTML = ""
            document.querySelector(".page").appendChild(modelo)

            carregar()
        })
        .catch(err => console.error(err));

        
    }
}