function validarUser() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            return response.json()
        })
        .then(users => {
            let email = document.getElementById("email").value
            let senha = document.getElementById("senha").value
            var session
            let achou = false
            let validou = false
            users.forEach(user => {
                if (user.email == email) {
                    achou = true
                    if(user.username == senha) {
                        validou = true
                        session = {
                            id: user.id,
                            name: user.name
                        }
                    }
                }
            });

            console.log(achou + " " + validou)
            if (achou) {
                if (validou) {
                    window.localStorage.setItem("session", JSON.stringify(session))
                    window.location.href = "./main.html"
                } else {
                    document.getElementsByClassName("error").item(1).classList.remove("hidden")
                    document.getElementsByClassName("error").item(0).classList.add("hidden")
                }
            } else {
                document.getElementsByClassName("error").item(0).classList.remove("hidden")
                document.getElementsByClassName("error").item(1).classList.add("hidden")
            }
        })
}

function carregarPosts() {
    var session = JSON.parse(window.localStorage.getItem("session"))
    if (session === null) {
        window.location.href = "./login.html"
    } else {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
            return response.json()
        })
        .then(posts => {
            posts.forEach(post => {
                if (session.id == post.userId) {
                    let newPost = document.querySelector(".modelo").cloneNode(true)

                    newPost.querySelector("#postName").innerHTML = session.name
                    newPost.querySelector("#postTitle").innerHTML = post.title
                    newPost.querySelector("#postBody").innerHTML = post.body

                    newPost.classList.remove("modelo")

                    document.querySelector("#username").innerHTML = session.name

                    document.querySelector(".posts").appendChild(newPost)
                }
            });
        })
    }
    
}

function logout() {
    window.localStorage.removeItem("session")
    window.location.reload()
}