function carregar() {
  const options = { method: "GET" };

  fetch("http://localhost:5000/solicitacoes/solicitacoes", options)
    .then((response) => response.json())
    .then((response) => {
      response.forEach((sol) => {
        console.log(sol);
        let model = document.querySelector(".modelo").cloneNode(true);
        model.querySelector("#codSol").innerHTML = sol.Num_Sol;
        model.querySelector("#dataSol").innerHTML = sol.Data_sol.split("T")[0];
        model.querySelector("#nomeDepto").innerHTML = sol.Nome_Depto;
        model.querySelector("#nomeFunc").innerHTML = sol.Nome_Func;
        model.querySelector("#nomeProd").innerHTML = sol.Nome_produto;
        model.querySelector("#qtde").innerHTML = sol.Qtde;
        model.querySelector("#valor").innerHTML = sol.valor;
        model.classList.remove("modelo");
        document.querySelector("tbody").appendChild(model);
      });
    })
    .catch((err) => console.error(err));

  fetch("http://localhost:5000/solicitacoes/depto", options)
    .then((response) => response.json())
    .then((response) => {
        response.forEach(depto => {
            let op = document.createElement("option")
            op.value = depto.Cod_Depto
            op.innerHTML = depto.Nome_Depto

            document.querySelector("#selDepto").appendChild(op)
        })
    })
    .catch((err) => console.error(err));

    fetch("http://localhost:5000/solicitacoes/produtos", options)
    .then((response) => response.json())
    .then((response) => {
        response.forEach(prod => {
            let op = document.createElement("option")
            op.value = prod.Cod_Produto
            op.innerHTML = prod.Nome_produto

            document.querySelector("#selProd").appendChild(op)
        })
    })
    .catch((err) => console.error(err));
}

function toggleModal() {
  document.querySelector(".modal").classList.toggle("escondido");
}

function cadastrar() {
  let data = JSON.stringify({
    cod_soluto: document.querySelector("#codSolInp").value,
    nome_soluto: document.querySelector("#nomeSolInp").value,
  });
  const options = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: data,
  };

  fetch("http://localhost:5000/solicitacoes/solutos", options)
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      if (response.cod_soluto !== undefined) {
        toggleModal(0);
        let model = document.querySelector(".modelo").cloneNode(true);
        document.querySelector("tbody").innerHTML = "";
        document.querySelector("tbody").appendChild(model);
        carregar();
      }
    })
    .catch((err) => console.error(err));
}
