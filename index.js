document.addEventListener('keydown', (event) => {
    if (event.keyCode == 13) {
        event.preventDefault()
        busca()
    }
})

async function busca() {
    var ra = document.getElementById("ra-input").value
    await fetch("https://18.228.138.74/alunos/" + ra)
        .then(data => data.json().then(json => {
            console.log(JSON.stringify(json))
            if (json.turmas.length != 0) {
                localStorage.setItem('aulasData', JSON.stringify(json))
                document.location.pathname = '/minha-grade.html'
            } else {
                console.log("RA não encontrado")
            }
        }))
}