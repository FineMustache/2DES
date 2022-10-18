function carregar() {
    document.querySelector("#username").innerHTML = JSON.parse(localStorage.getItem("user")).username
    document.querySelector(".pfp").style.backgroundImage = `url('../../assets/${JSON.parse(localStorage.getItem("user")).img}`
}