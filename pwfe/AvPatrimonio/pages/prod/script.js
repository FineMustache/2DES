function carregar(){
    document.querySelector("#username").innerHTML = JSON.parse(localStorage.getItem("user")).username
    document.querySelector(".pfp").style.backgroundImage = `url('../../assets/${JSON.parse(localStorage.getItem("user")).img}`

    const options = {method: 'GET'};

    fetch('https://patrimoniomongo.herokuapp.com/read/', options)
    .then(response => response.json())
    .then(response => {
        response.items.forEach(prod => {
            let modelo = document.querySelector(".modelo").cloneNode(true)
            modelo.querySelector("#prodId").innerHTML = prod._id
            modelo.querySelector("#prodNi").innerHTML = prod.ni
            modelo.querySelector("#prodAq").innerHTML = new Date(prod.aquisicao).toLocaleString("pt-BR").split(" ")[0]
            modelo.querySelector("#prodDeno").innerHTML = prod.denominacao
            modelo.querySelector("#prodValor").innerHTML = "R$ " + prod.valor
            modelo.id = prod._id

            modelo.querySelector("#prodImg").style.backgroundImage = `url('../../assets/${prod.img}')`

            modelo.classList.remove("modelo")

            document.querySelector(".produtos").appendChild(modelo)
        });
    })
    .catch(err => console.error(err));

    document.querySelector("#inpImg").addEventListener('change', function(e) {

        var file = document.querySelector("#inpImg").files[0];
        var imageType = /image.*/;

        if (file.type.match(imageType)) {
            document.querySelector(".fachada").innerHTML = file.name
        } else {
            fileDisplayArea.innerHTML = "File not supported!"
        }
    });
}

function toggleModal() {
    document.querySelector(".modal").classList.toggle("escondido")
    document.body.classList.toggle("locked")
}
function cadastrar() {
    let data = JSON.stringify({
        'ni': document.querySelector("#inpNi").value,
        'aquisicao': document.querySelector("#inpAq").value,
        'denominacao': document.querySelector("#inpDeno").value,
        'valor': document.querySelector("#inpValor").value,
        'img': "default.png"
    })

    const options = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: data
      };
      
      fetch('https://patrimoniomongo.herokuapp.com/create', options)
        .then(response => response)
        .then(response => {
            sucesso()
        })
        .catch(err => console.error(err));
}

function sucesso() {
    document.querySelector(".form").classList.toggle("escondido")
    document.querySelector(".sucesso").classList.toggle("escondido")

    setTimeout(function () {
        document.querySelector(".form").classList.toggle("escondido")
        document.querySelector(".sucesso").classList.toggle("escondido")

        document.querySelector(".modal").classList.toggle("escondido")
    }, 2000)

    document.querySelector("#inpNi").value = ""
    document.querySelector("#inpAq").value = ""
    document.querySelector("#inpDeno").value = ""
    document.querySelector("#inpValor").value = ""
    document.querySelector(".fachada").innerHTML = "Selecionar Imagem"
    document.body.classList.toggle("locked")

    let modelo = document.querySelector(".modelo").cloneNode(true)

    document.querySelector(".produtos").innerHTML = ""
    document.querySelector(".produtos").appendChild(modelo)
    carregar()
}

function remover(id) {
    const options = {method: 'DELETE'};

    fetch('https://patrimoniomongo.herokuapp.com/del/id/' + id, options)
    .then(response => response.json())
    .then(response => {
        let modelo = document.querySelector(".modelo").cloneNode(true)

        document.querySelector(".produtos").innerHTML = ""
        document.querySelector(".produtos").appendChild(modelo)
        carregar()
    })
    .catch(err => console.error(err));
}