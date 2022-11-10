function carregar() {
    var vagas = document.querySelectorAll(".spot")

    vagas.forEach((v, indice) => {

        if(indice <= 5){
            v.id = "A" + (indice+1)
        } else if(indice <= 11){
            v.id = "B" + (indice-5)
        } else if(indice <= 17){
            v.id = "C" + (indice-11)
        } else {
            v.id = "D" + (indice-17)
        }

        v.addEventListener('click', () => {
            
            toggleModal(v.id)
        })
    })

    fetch('http://localhost:5000/estacionamento/vagas')
    .then(response => response.json())
    .then(vagasBanco => {
        console.table(vagasBanco)
        vagasBanco.forEach(v =>{
            if (!v.disponivel) {
                document.querySelector(`#${v.id}`).classList.add("selected")
            } else {
                document.querySelector(`#${v.id}`).classList.remove("selected")
            }
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
    document.getElementById("vagaModal2").innerHTML = vaga
    if (vaga !== undefined) {
        if (document.getElementById(vaga).classList.contains('selected')) {
            document.querySelector('.form').classList.add("escondido")
            document.querySelector('.loading').classList.add("escondido")
            document.querySelector('.remove').classList.remove("escondido")
        } else {
            document.querySelector('.form').classList.remove("escondido")
            document.querySelector('.loading').classList.add("escondido")
            document.querySelector('.remove').classList.add("escondido")
        }
    }
    
    document.querySelector('.modal').classList.toggle('escondido')
    document.body.style.overflow = 'hidden'
}

function cadastrar() {
    document.querySelector('.form').classList.toggle('escondido')
    document.querySelector('.loading').classList.toggle('escondido')
    let cli = document.querySelector("#cli").value
    let placa = document.querySelector('#placa').value
    let vaga = document.querySelector("#vagaModal").innerHTML

    const options = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: `{"id_cliente":${cli},"placa":"${placa}","id_vaga":"${vaga}"}`
      };
      
      fetch('http://localhost:5000/estacionamento/entradas', options)
        .then(response => response.json())
        .then(response => {
            console.log(response)
            if (response.placa !== null) {
                document.querySelector(".cover-1").classList.add("animate-small")
                document.querySelector(".cover-2").classList.add("animate-long")
                document.querySelector(".loading-circle").classList.add("stop")
                document.querySelector(".inner-circle").classList.add("round")
                document.querySelector(".inner-circle").classList.add("fade-inner")

                setTimeout(()=>{
                    toggleModal(vaga)
                    document.querySelector(`#${vaga}`).classList.toggle("selected")
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

    console.table({cli, placa, vaga})
}

function fecharEntrada() {
    let vaga = document.querySelector("#vagaModal2").innerHTML
    document.querySelector('.remove').classList.toggle('escondido')
    document.querySelector('.loading').classList.toggle('escondido')
      fetch(`http://localhost:5000/estacionamento/entrada/${vaga}`)
        .then(response => response.json())
        .then(response => {
            console.table(response)
            let curdate = new Date()
            let indate = new Date(response[0].data_entrada)
            let horas = Math.abs(curdate - indate) / 36e5
            let valor = Math.ceil((horas * 15)/5)*5

            const options = {
                method: 'PUT',
                headers: {'Content-Type': 'application/json'},
                body: `{"id":"${response[0].id}","valor":${valor}}`
              };
              
              fetch('http://localhost:5000/estacionamento/entradas', options)
                .then(response => response.json())
                .then(response => {
                    console.log(response)
                    if (response.id !== null) {
                        document.querySelector(".cover-1").classList.add("animate-small")
                        document.querySelector(".cover-2").classList.add("animate-long")
                        document.querySelector(".loading-circle").classList.add("stop")
                        document.querySelector(".inner-circle").classList.add("round")
                        document.querySelector(".inner-circle").classList.add("fade-inner")
        
                        setTimeout(()=>{
                            toggleModal(vaga)
                            document.querySelector(`#${vaga}`).classList.toggle("selected")
                            document.querySelector('.form').classList.toggle('escondido')
                            document.querySelector('.loading').classList.add('escondido')
                            document.querySelector('.remove').classList.add('escondido')
                            document.querySelector('.errorR').classList.add('escondido')
                            document.querySelector(".cover-1").classList.remove("animate-small")
                            document.querySelector(".cover-2").classList.remove("animate-long")
                            document.querySelector(".loading-circle").classList.remove("stop")
                            document.querySelector(".inner-circle").classList.remove("round")
                            document.querySelector(".inner-circle").classList.remove("fade-inner")
                        }, 2000)
                    } else {
                        console.log(response)
                        document.querySelector('.loading').classList.add('escondido')
                        document.querySelector('.remove').classList.remove('escondido')
                        document.querySelector('.errorR').classList.remove('escondido')
                    }
                })
                .catch(err => {
                    console.log(err)
                    document.querySelector('.form').classList.toggle('escondido')
                    document.querySelector('.loading').classList.toggle('escondido')
                    document.querySelector('.errorR').classList.remove('escondido')
                });
        })
        .catch(err => {
            console.log(err)
            document.querySelector('.loading').classList.toggle('escondido')
            document.querySelector('.remove').classList.toggle('escondido')
            document.querySelector('.errorR').classList.remove('escondido')
        });
}