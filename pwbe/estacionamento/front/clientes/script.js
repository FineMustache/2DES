var linha
var nome = document.querySelector("#nome");
var telefone = document.querySelector("#telefone");
var endereco = document.querySelector("#endereco");
var dd = []
function carregar() {
    fetch('http://localhost:5000/estacionamento/clientes')
        .then((response) => {
            return response.json();
        })
        .then((dados) => {
            dd = dados
            preencherTabelas()
        })
}
function preencherTabelas() {
    dd.forEach(cada => {
        linha = document.createElement('tr') 
        nome = document.createElement('td')
        endereco = document.createElement('td')
        telefone = document.createElement('td')
        let excluir = document.createElement('td')
        excluir.innerHTML = "<img src='../assets/trash-can.png'>"
        excluir.addEventListener("click", () => {
            document.querySelector("#clinome").innerHTML = cada.nome
            document.querySelector(".form").classList.add('escondido')
            document.querySelector(".remove").classList.remove('escondido')
            document.querySelector("#btnRemove").value = cada.id
            toggleModal()
        })
        nome.innerHTML = cada.nome;
        endereco.innerHTML = cada.endereco;
        telefone.innerHTML = cada.telefone;
        linha.append(nome, telefone, endereco, excluir);
        document.querySelector("#corpo").appendChild(linha);
    })
}

function modalCad() {
    document.querySelector('.form').classList.remove('escondido')
    document.querySelector('.remove').classList.add('escondido')
    document.querySelector('.loading').classList.add('escondido')
    toggleModal()
}

function toggleModal(){
    document.querySelector('.modal').classList.toggle('escondido')
    document.body.style.overflow = 'hidden'
}

function telMask(ev) {
    ev = ev || window.event;
    ev.stopPropagation()
    ev.preventDefault()
    if (!isNaN(ev.key)) {
        if(ev.target.value.length == 0){
            ev.target.value = ev.target.value + "(" + ev.key
        } else if (ev.target.value.length == 2){
            ev.target.value = ev.target.value + ev.key + ") "
        } else if(ev.target.value.length == 3){
            ev.target.value = ev.target.value + ") " + ev.key
        } else if (ev.target.value.length == 10){
            ev.target.value = ev.target.value + "-" + ev.key
        } else if (ev.target.value.length != 15){
            ev.target.value = ev.target.value + ev.key
        }
    }
}

function cadastrar() {
    document.querySelector('.form').classList.toggle('escondido')
    document.querySelector('.loading').classList.toggle('escondido')
    let nome = document.querySelector("#nome").value
    let tel = document.querySelector('#tel').value
    let end = document.querySelector("#end").value

    const options = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: `{"nome": "${nome}","telefone":"${tel}","endereco":"${end}"}`
      };
      
      fetch('http://localhost:5000/estacionamento/clientes', options)
        .then(response => response.json())
        .then(response => {
            console.log(response)
            if (response.nome !== null) {
                document.querySelector(".cover-1").classList.add("animate-small")
                document.querySelector(".cover-2").classList.add("animate-long")
                document.querySelector(".loading-circle").classList.add("stop")
                document.querySelector(".inner-circle").classList.add("round")
                document.querySelector(".inner-circle").classList.add("fade-inner")
                document.querySelector('#corpo').innerHTML = ""
                carregar()
                setTimeout(()=>{
                    toggleModal()
                    document.querySelector('.form').classList.toggle('escondido')
                    document.querySelector('.loading').classList.toggle('escondido')
                    document.querySelector(".cover-1").classList.remove("animate-small")
                    document.querySelector(".cover-2").classList.remove("animate-long")
                    document.querySelector(".loading-circle").classList.remove("stop")
                    document.querySelector(".inner-circle").classList.remove("round")
                    document.querySelector(".inner-circle").classList.remove("fade-inner")
                }, 2000)
            } else {
                console.log(response)
                document.querySelector('.form').classList.toggle('escondido')
                document.querySelector('.loading').classList.toggle('escondido')
                document.querySelector('.error').classList.remove('escondido')
            }
        })
        .catch(err => {
            console.log(err)
            document.querySelector('.form').classList.toggle('escondido')
            document.querySelector('.loading').classList.toggle('escondido')
            document.querySelector('.error').classList.remove('escondido')
        });
}

function removerCliente(btn) {
    document.querySelector('.remove').classList.toggle('escondido')
    document.querySelector('.loading').classList.toggle('escondido')

    const options = {
        method: 'DELETE',
        headers: {'Content-Type': 'application/json'},
        body: `{"id": ${btn.value}}`
      };
      
      fetch('http://localhost:5000/estacionamento/clientes', options)
        .then(response => response.json())
        .then(response => {
            if (response.id !== undefined) {
                document.querySelector(".cover-1").classList.add("animate-small")
                document.querySelector(".cover-2").classList.add("animate-long")
                document.querySelector(".loading-circle").classList.add("stop")
                document.querySelector(".inner-circle").classList.add("round")
                document.querySelector(".inner-circle").classList.add("fade-inner")
                document.querySelector('#corpo').innerHTML = ""
                carregar()
                setTimeout(()=>{
                    toggleModal()
                    document.querySelector('.form').classList.toggle('escondido')
                    document.querySelector('.loading').classList.toggle('escondido')
                    document.querySelector(".cover-1").classList.remove("animate-small")
                    document.querySelector(".cover-2").classList.remove("animate-long")
                    document.querySelector(".loading-circle").classList.remove("stop")
                    document.querySelector(".inner-circle").classList.remove("round")
                    document.querySelector(".inner-circle").classList.remove("fade-inner")
                }, 2000)
            } else {
                console.log(response)
                document.querySelector('.form').classList.add('escondido')
                document.querySelector('.loading').classList.add('escondido')
                document.querySelector('.errorR').classList.remove('escondido')
                document.querySelector('.remove').classList.remove('escondido')
            }
        })
        .catch(err => {
            console.log(err)
            document.querySelector('.form').classList.add('escondido')
            document.querySelector('.loading').classList.add('escondido')
            document.querySelector('.errorR').classList.remove('escondido')
            document.querySelector('.remove').classList.remove('escondido')
        });
}