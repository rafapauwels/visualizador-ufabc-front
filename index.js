document.addEventListener('keydown', (event) => {
    if (event.keyCode == 13) {
        event.preventDefault()
        busca()
    }
})

async function busca() {
    document.getElementById("pesquisar-spinner").classList.add("spinner-border")
    document.getElementById("pesquisar-spinner").classList.add("spinner-border-sm")

    var ra = document.getElementById("ra-input").value
    await fetch("https://visualizador.memori.cc/alunos/" + ra)
        // await fetch("http://localhost:8080/alunos/" + ra)
        .then(data => data.json().then(json => {
            console.log(JSON.stringify(json))
            if (json.turmas.length != 0) {
                localStorage.setItem('aulasData', JSON.stringify(json))
                document.location.pathname = '/minha-grade.html'
            } else {
                document.getElementById("ra-feedback").classList.add("ra-invalido")
                document.getElementById("ra-feedback").innerText = "RA não encontrado :("
                console.log("RA não encontrado")
            }
        }))

    document.getElementById("pesquisar-spinner").classList.remove("spinner-border")
    document.getElementById("pesquisar-spinner").classList.remove("spinner-border-sm")
}