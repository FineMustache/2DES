function carregar() {
    var respFetchAlunos = fetch("http://localhost:5000/academia/alunos")

    respFetchAlunos.then((response) => {
        return response.json()
    })
    .then((data) =>{
        data.forEach(aluno => {
            let item = document.querySelector('.modelo-aluno').cloneNode(true)
            item.querySelector('#nomeAluno').innerHTML = aluno.nome
            item.querySelector('#nascAluno').innerHTML = new Date(aluno.nascimento).toLocaleDateString('pt-BR')
            item.querySelector('#sexoAluno').innerHTML = aluno.sexo
            item.querySelector('#pesoAluno').innerHTML = aluno.peso

            aluno.telefone.forEach(tel => {
                let spanTel = document.createElement("span")
                spanTel.innerHTML = tel

                item.querySelector('.card-tel').appendChild(spanTel)
            });

            item.classList.remove("modelo-aluno")

            document.querySelector('.page-alunos').appendChild(item)
        });
    })

    var respFetchAparelhos = fetch("http://localhost:5000/academia/aparelhos")

    respFetchAparelhos.then((response) => {
        return response.json()
    })
    .then((data) =>{
        data.forEach(aparelho => {
            let item = document.querySelector('.modelo-aparelho').cloneNode(true)
            item.querySelector('#nomeAparelho').innerHTML = aparelho.nome_aparelho

            item.classList.remove("modelo-aparelho")

            document.querySelector('.page-aparelhos').appendChild(item)
        });
    })

    var respFetchExercicios = fetch("http://localhost:5000/academia/exercicios")

    respFetchExercicios.then((response) => {
        return response.json()
    })
    .then((data) =>{
        data.forEach(ex => {
            let item = document.querySelector('.modelo-exercicio').cloneNode(true)
            item.querySelector('#descExercicio').innerHTML = ex.descricao

            item.classList.remove("modelo-exercicios")

            document.querySelector('.page-exercicios').appendChild(item)
        });
    })
}

function displayAparelhos() {
    document.querySelector(".page-alunos").classList.add("escondido")
    document.querySelector(".page-aparelhos").classList.remove("escondido")
    document.querySelector(".page-exercicios").classList.add("escondido")
}

function displayExercicios() {
    document.querySelector(".page-alunos").classList.add("escondido")
    document.querySelector(".page-aparelhos").classList.add("escondido")
    document.querySelector(".page-exercicios").classList.remove("escondido")
}