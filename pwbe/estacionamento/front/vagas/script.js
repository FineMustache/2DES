function carregar() {
    var vagas = document.querySelectorAll(".spot")

    vagas.forEach(v => {
        v.addEventListener('click', () => {
            v.classList.toggle('selected')
        })
    })
}