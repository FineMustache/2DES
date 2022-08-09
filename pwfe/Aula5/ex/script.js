//Apenas analistas e desenvolvedores podem possuir Admin os demais são apenas leitores;
//Apenas cargos de nivel 3 ou superior podem ser Admin;
//Cargos inferiores a 3 podem ser removidos da lista de acesso;

var funcionarios = [
	{
		"funcionario":"Sancho Cedraz",
		"cargo":{
			"nome":"Analista",
			"nivel":2
		},
		"autorizado":true
	},		
	{
		"funcionario":"Ionara Pederneiras",
		"cargo":{
			"nome":"Técnico",
			"nivel":2
		},
		"autorizado":true
	},
	{
		"funcionario":"Filipe Castanho",
		"cargo":{
			"nome":"Desenvolvedor",
			"nivel":1
		},
		"autorizado":false
	},
	{
		"funcionario":"Lívia Bicalho",
		"cargo":{
			"nome":"Analista",
			"nivel":3
		},
		"autorizado":true
	},
	{
		"funcionario":"Mauro Varanda",
		"cargo":{
			"nome":"Desenvolvedor",
			"nivel":3
		},
		"autorizado":false
	},	
	{
		"funcionario":"Sandro Rosário",
		"cargo":{
			"nome":"Técnico",
			"nivel":3
		},
		"autorizado":true
	}
]

function carregar(){
    funcionarios.forEach(func => {
        let row = document.createElement("tr")
        let nome = document.createElement("td")
        let cargo = document.createElement("td")
        let aut = document.createElement("td")
        let remove = document.createElement("td")
		let cargoNome = document.createElement("span")
		let cargoNivel = document.createElement("span")

		cargoNome.innerHTML = func.cargo.nome
		cargoNivel.innerHTML = "(" + func.cargo.nivel + ")"
		cargoNivel.classList.add("nivel")

        nome.innerHTML = func.funcionario
        cargo.appendChild(cargoNome)
		cargo.appendChild(cargoNivel)
		cargo.classList.add("cargo")
        if (func.autorizado == true) {
            aut.innerHTML = "Sim"
            aut.style.color = "green"
        } else {
            aut.innerHTML = "Não"
            aut.style.color = "red"
        }

		remove.classList.add("btn")
		let removeImg = document.createElement("img")
		removeImg.src = "https://cdn-icons-png.flaticon.com/512/2891/2891491.png"
		remove.appendChild(removeImg)
		remove.setAttributeNS(null, "onclick", "remover(this)")

        if (func.cargo.nivel >= 3) {
			remove.classList.add("desabilitado")
        }

		row.appendChild(nome)
		row.appendChild(cargo)
		row.appendChild(aut)
		row.appendChild(remove)
		
		document.querySelector(".tabela").appendChild(row)

    });
}

function remover(e) {
	e.parentNode.remove()
}