var linha
var placa = document.querySelector("#placa");
var modelo = document.querySelector("#modelo");
var cor = document.querySelector("#cor");
var tipo = document.querySelector("#tipo");
var dd = []
function carregar() {
    fetch('http://localhost:5000/estacionamento/veiculos')
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
        console.log(dd)
        linha = document.createElement('tr') 
        placa = document.createElement('td')
        cor = document.createElement('td')
        modelo = document.createElement('td')
        tipo = document.createElement('td')
        placa.innerHTML = cada.placa;
        cor.innerHTML = cada.cor;
        modelo.innerHTML = cada.modelo;
        tipo.innerHTML = cada.tipo;
        let excluir = document.createElement('td')
        excluir.innerHTML = "<img src='../assets/trash-can.png'>"
        excluir.addEventListener("click", () => {
            document.querySelector("#carplaca").innerHTML = cada.placa
            document.querySelector(".form").classList.add('escondido')
            document.querySelector(".remove").classList.remove('escondido')
            document.querySelector("#btnRemove").value = cada.placa
            toggleModal()
        })
        linha.append(placa, cor, modelo, tipo, excluir);
        document.querySelector("#corpo").appendChild(linha);
    })
}

function toggleModal(){
    document.querySelector('.modal').classList.toggle('escondido')
    document.body.style.overflow = 'hidden'
}

function removerCliente(btn) {
    document.querySelector('.remove').classList.toggle('escondido')
    document.querySelector('.loading').classList.toggle('escondido')

    const options = {
        method: 'DELETE',
        headers: {'Content-Type': 'application/json'},
        body: `{"placa": ${btn.value}}`
      };
      
      fetch('http://localhost:5000/estacionamento/veiculos', options)
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