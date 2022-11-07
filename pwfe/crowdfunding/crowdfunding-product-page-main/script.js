function carregar() {
    let curmoney = parseFloat(document.querySelector("#curmoney").innerHTML.replace(',','.'))
    let goalmoney = parseFloat(document.querySelector("#goalmoney").innerHTML.replace(',','.'))

    let percent = (curmoney * 100)/goalmoney

    document.querySelector('.progress-bar').style.width = percent + '%'
}