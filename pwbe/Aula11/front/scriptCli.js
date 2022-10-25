function carregar() {
    const options = {method: 'GET'};

    fetch('http://localhost:5000/blobs/clientes', options)
    .then(response => response.json())
    .then(response => {
        response.forEach(cli => {
            let model = document.querySelector(".modelo").cloneNode(true)
            model.querySelector("span").innerHTML = cli.nome
            model.querySelector("div").style.backgroundImage = `url('${montaImg(cli.img)}')`
            model.classList.toggle("modelo")
            document.querySelector(".clientes").appendChild(model)
        })
    })
    .catch(err => console.error(err));
}

function montaImg(img) {
    if (img != null) {
        return `data:image/png;base64,${img}`;
    } else
        return `./default.png`;
  }