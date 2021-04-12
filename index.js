async function busca() {
    var ra = document.getElementById("ra-input").value
    await fetch("http://127.0.0.1:8080/alunos/" + ra)
        .then(data => data.json().then(json => {
            console.log(JSON.stringify(json))
            localStorage.setItem('aulasData', JSON.stringify(json))
            document.location.pathname = '/minha-grade.html'
        }))
}