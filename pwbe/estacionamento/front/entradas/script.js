var dd = []
function carregar() {
    fetch('http://localhost:5000/estacionamento/entradas')
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
        var linha = document.createElement("tr");
        nome = document.createElement("td");
        tipo = document.createElement("td");
        placa = document.createElement("td");
        cor = document.createElement("td");
        modelo = document.createElement("td");
        vaga = document.createElement("td");
        entrada_data = document.createElement("td");
        saida_data = document.createElement("td");
        valor = document.createElement("td");
        excluir = document.createElement("td")
        excluir.innerHTML = "<img src='../assets/trash-can.png'>"
        nome.innerHTML = cada.nome_cli;
        placa.innerHTML = cada.placa;
        modelo.innerHTML = cada.modelo;
        cor.innerHTML = cada.cor;
        tipo.innerHTML = cada.tipo;
        vaga.innerHTML = cada.vaga;
        let datae = new Date(cada.data_entrada);
        entrada_data.innerHTML = datae.toLocaleString('pt-BR');
        let datas = cada.data_saida == null ? "" : new Date(cada.data_saida).toLocaleString('pt-BR');
        saida_data.innerHTML = datas
        valor.innerHTML = cada.valor == null ? "" : 'R$' + parseFloat(cada.valor).toFixed(2).replace('.', ',');

        excluir.addEventListener("click", () => {
            document.querySelector("#entId").innerHTML = cada.id
            document.querySelector(".remove").classList.remove('escondido')
            document.querySelector("#btnRemove").value = cada.id
            toggleModal()
        })

        if (cada.valor == null) {
            valor.classList.add('nulo')
        }
        if (cada.data_saida == null) {
            saida_data.classList.add('nulo')
        }

        linha.append(nome, placa, modelo, cor, tipo, vaga, entrada_data, saida_data, valor, excluir);
        document.querySelector("#corpo").appendChild(linha);
    })
}

function toggleModal(){
    document.querySelector('.modal').classList.toggle('escondido')
    document.body.style.overflow = 'hidden'
}

function removerEntrada(btn) {
    document.querySelector('.remove').classList.toggle('escondido')
    document.querySelector('.loading').classList.toggle('escondido')

    const options = {
        method: 'DELETE',
        headers: {'Content-Type': 'application/json'},
        body: `{"id": ${btn.value}}`
      };
      
      fetch('http://localhost:5000/estacionamento/entradas', options)
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
                    document.querySelector('.loading').classList.toggle('escondido')
                    document.querySelector(".cover-1").classList.remove("animate-small")
                    document.querySelector(".cover-2").classList.remove("animate-long")
                    document.querySelector(".loading-circle").classList.remove("stop")
                    document.querySelector(".inner-circle").classList.remove("round")
                    document.querySelector(".inner-circle").classList.remove("fade-inner")
                }, 2000)
            } else {
                console.log(response)
                document.querySelector('.loading').classList.add('escondido')
                document.querySelector('.errorR').classList.remove('escondido')
                document.querySelector('.remove').classList.remove('escondido')
            }
        })
        .catch(err => {
            console.log(err)
            document.querySelector('.loading').classList.add('escondido')
            document.querySelector('.errorR').classList.remove('escondido')
            document.querySelector('.remove').classList.remove('escondido')
        });
}