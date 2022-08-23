var inpLog = document.querySelector("#log")
var inpComp = document.querySelector("#complemento")
var inpBairro = document.querySelector("#bairro")
var inpCidade = document.querySelector("#cidade")
var inpEstado = document.querySelector("#estado")
var inpNome = document.querySelector("#nome")
var inpEmail = document.querySelector("#email")
var inpPw = document.querySelector("#password")
var inpPwConf = document.querySelector("#passwordConf")
var inpTel = document.querySelector("#tel")
var cepvalid = false
var pwValid = false

function CEPCheck(e) {
    if (e.value.length < 8) {
        if (e.value.length === 0){
            inpLog.value = ""
            inpComp.value = ""
            inpBairro.value = ""
            inpCidade.value = ""
            inpEstado.value = ""
        } else {
            inpLog.value = "Carregando..."
            inpComp.value = "Carregando..."
            inpBairro.value = "Carregando..."
            inpCidade.value = "Carregando..."
            inpEstado.value = "Carregando..."
        }
        
    } else {
        if (/^\d+$/.test(e.value)) {
            fetch(`https://viacep.com.br/ws/${e.value}/json/`)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                if (data.erro) {
                    document.querySelector(".erro").classList.remove("hidden")
                    cepvalid = false
                } else {
                    inpLog.value = data.logradouro
                    inpComp.value = data.complemento
                    inpBairro.value = data.bairro
                    inpCidade.value = data.localidade
                    inpEstado.value = data.uf
                    document.querySelector(".erro").classList.add("hidden")
                    cepvalid = true
                }
                
            })
        } else {
            document.querySelector(".erro").classList.remove("hidden")
        }
    }
}

function cadastrar() {
    var user = {
        nome: inpNome.value,
        email: inpEmail.value,
        senha: inpPw.value,
        tel: inpTel.value,
        endereco: {
            cep: document.querySelector("#cep").value,
            log: inpLog.value,
            complemento: inpComp.value,
            bairro: inpBairro.value,
            cidade: inpCidade.value,
            estado: inpEstado.value
        }
    }

    console.log(user)
}

function enableBtn(){
    if (cepvalid &&
        pwValid &&
        inpNome.value.length > 0 &&
        inpEmail.value.length > 0 &&
        inpPw.value.length > 0 &&
        inpTel.value.length > 0) {
        
            document.querySelector(".btn").disabled = false
    } else {
        document.querySelector(".btn").disabled = true
    }
    
}

function pwCheck(e) {
    if(e.value == inpPw.value){
        pwValid = true
        document.querySelector(".erro-senha").classList.add("hidden")
    } else {
        pwValid = false
        document.querySelector(".erro-senha").classList.remove("hidden")
    }
}