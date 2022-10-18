function login() {
    let data = JSON.stringify({
        'username': document.querySelector("#inpEmail").value,
        'password': document.querySelector("#inpSenha").value
    })

    const options = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: data
      };
      
      fetch('https://patrimoniomongo.herokuapp.com/login', options)
        .then(response => response.json())
        .then(response => {
            if (response.erro == undefined) {
                localStorage.setItem('user', JSON.stringify(response));
                document.location.href = "../home/index.html"
            } else {
                document.querySelector(".error").classList.remove("escondido")
            }
        })
        .catch(err => console.error(err));
}