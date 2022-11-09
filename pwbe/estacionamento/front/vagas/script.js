function carregar() {
    var vagas = document.querySelectorAll(".spot")

    vagas.forEach(v => {
        v.addEventListener('click', () => {
            // v.classList.toggle('selected')
            toggleModal(v.querySelector("span").innerHTML)
        })
    })

    fetch('http://localhost:5000/estacionamento/clientes')
    .then(response => response.json())
    .then(clientes => {
        let selCli = document.querySelector("#cli")
        clientes.forEach(cli => {
            let op = document.createElement("option")
            op.innerHTML = cli.nome
            op.value = cli.id
            selCli.appendChild(op)
        })
    })

    fetch('http://localhost:5000/estacionamento/veiculos')
    .then(response => response.json())
    .then(veiculos => {
        let selPlaca = document.querySelector("#placa")
        veiculos.forEach(v => {
            let op = document.createElement("option")
            op.innerHTML = `${v.placa} - ${v.modelo} - ${v.cor}`
            op.value = v.placa
            selPlaca.appendChild(op)
        })
    })
}

function toggleModal(vaga){
    document.getElementById("vagaModal").innerHTML = vaga
    document.querySelector('.modal').classList.toggle('escondido')
    document.body.style.overflow = 'hidden'

    setTimeout(()=>{
        document.querySelector(".cover-1").classList.add("animate-small")
        document.querySelector(".cover-2").classList.add("animate-long")
        document.querySelector(".loading-circle").classList.add("stop")
        document.querySelector(".inner-circle").classList.add("round")
        document.querySelector(".inner-circle").classList.add("fade-inner")
    }, 1000)
}

// function cadastrar() {
//     let cli = document.querySelector("#cli").value
//     let placa = document.querySelector('#placa').value
//     let vaga = document.querySelector("#vagaModal").innerHTML

//     const options = {
//         method: 'POST',
//         headers: {'Content-Type': 'application/json'},
//         body: `{"id_cliente":${cli},"placa":"${placa}","id_vaga":"${vaga}"}`
//       };
      
//       fetch('http://localhost:5000/estacionamento/entradas', options)
//         .then(response => response.json())
//         .then(response => {
//             if (response.placa !== null) {
                
//             }
//         })
//         .catch(err => console.error(err));

//     console.table({cli, placa, vaga})
// }