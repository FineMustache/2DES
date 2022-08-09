var btnPlaca = document.getElementById('btnPlaca');

btnPlaca.addEventListener('click', validaPlaca);


function validaPlaca() {
    const padraoAntigo = /^[a-zA-Z]{3}[0-9]{4}$/;
    const padraoNovo = /^[a-zA-Z]{3}[0-9]{1}[a-zA-Z]{1}[0-9]{2}$/

    var inputPlaca = document.getElementById('inputPlaca');
    var taPlaca = document.getElementById('taPlaca');

    var valida = false

    if (padraoAntigo.test(inputPlaca.value)) {
        valida = true
    } else if (padraoNovo.test(inputPlaca.value)) {
        valida = true
    }

    if (valida) {
        taPlaca.value = "Placa Válida"
        taPlaca.style.color = "green"
    } else {
        taPlaca.value = "Placa Inválida"
        taPlaca.style.color = "red"
    }
}

    var meuinputCpf = document.getElementById('veriCpf');
    //meuinputCpf.addEventListener("keyup", VerificarCPF);

    var buscaCpf = document.querySelector("#buscaCpf");
    buscaCpf.addEventListener("click", VerificarCPF);

    var resultado2 = document.querySelector("#cpfRes")

    function VerificarCPF() {
        var soma;
        var resto;

        var resposta1 = `Cpf inválido`;
        var resposta2 = `Cpf válido`;

        soma = 0;

        if (meuinputCpf.value.length != 11) {
            resultado2.value = resposta1
            return
        }
        if (meuinputCpf.value.toString() === "00000000000") {
            resultado2.value = resposta1
            return
        }for (i = 1; i <= 9; i++) {
            soma = soma + parseInt(meuinputCpf.value.substring(i - 1, i)) * (11 - i);
        }
        resto = soma % 11;
        if (resto == 10 || resto == 11 || resto < 2) {
            resto = 0;
        } else {
            resto = 11 - resto;
        } if (resto != parseInt(meuinputCpf.value.substring(9, 10))) {
            resultado2.value = resposta1
            return
        }
        soma = 0;
        for (i = 1; i <= 10; i++) {
            soma = soma + parseInt(meuinputCpf.value.substring(i - 1, i)) * (12 - i);
        }
        resto = soma % 11;
        if (resto == 10 || resto == 11 || resto < 2) {
            resto = 0;
        } else {
            resto = 11 - resto;
        }if (resto != parseInt(meuinputCpf.value.substring(10, 11))) {
            resultado2.value = resposta1
            return
        
        }

        resultado2.value = resposta2;
    }

    var gerarTelefone = document.querySelector("#gerarTele");
    gerarTelefone.addEventListener("click", geraTel);
 
    var taTel = document.querySelector("#telefones")

    function geraTel(ddd, qtde) {                                                                                             
        var telefones = []

        var ddd = document.querySelector("#DDDtelefone").value
        var qtde = document.querySelector("#qtdTele").value

        for (let i = 0; i < qtde; i++) {
            telefones[i] = "(" + ddd + ") 9"
            for (let j = 0; j < 8; j++) {
                telefones[i] = telefones[i] + Math.floor(Math.random()*9)
                if (j == 3) {
                    telefones[i] = telefones[i] + "-"
                }
            }
            taTel.value = taTel.value + telefones[i] + "\r\n"
        }
    }

    var meuInputGerarCpf = document.querySelector("#gerarCpf")
    var resultado4 = document.querySelector("#cpfs")

    var gerarCPF = document.querySelector("#btGerarCpf");
    gerarCPF.addEventListener("click", gerarCpf);

    function gerarCpf() {
        var retorno = [];
            for(i = 0; i < parseInt(meuInputGerarCpf.value); i++){
                const num1 = aleatorio(); 
                const num2 = aleatorio();
                const num3 = aleatorio();
    
                const dig1 = dig(num1, num2, num3); 
                const dig2 = dig(num1, num2, num3, dig1); 
                        retorno[i] = `${num1}.${num2}.${num3}-${dig1}${dig2}\r\n`;
                    }
    
                for (let index = 0; index < retorno.length; index++) {
                    resultado4.value = resultado4.value + retorno[index];
                    
                }
    }
    
    function dig(n1, n2, n3, n4) { 
      const nums = n1.split("").concat(n2.split(""), n3.split(""));
      
      if (n4 !== undefined){ 
        nums[9] = n4;
      }
      let x = 0;
    
      for (let i = (n4 !== undefined ? 11:10), j = 0; i >= 2; i--, j++) {
        x += parseInt(nums[j]) * i;
      }
      
      const y = x % 11;
      return y < 2 ? 0 : 11 - y; 
    }
    
    function aleatorio() {
      const aleat = Math.floor(Math.random() * 999);
      return ("" + aleat).padStart(3, '0'); 
    }