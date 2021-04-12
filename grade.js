if (window.attachEvent) {
    window.attachEvent('onload', loadCards);
} else {
    if (window.onload) {
        var curronload = window.onload;
        var newonload = function (evt) {
            curronload(evt);
            loadCards(evt);
        };
        window.onload = newonload;
    } else {
        window.onload = loadCards;
    }
}

function loadCards() {
    const dados = JSON.parse(localStorage.getItem('aulasData'))
    console.log(dados)

    for (var i = 0; i < dados.length; i++) {
        var prop = dados[i]
        var element = document.createElement("div")
        element.innerHTML = `<div class="p-3 class-block force-bottom">
            <div class="class-icon"><i class="bi bi-journal-bookmark text-indigo"></i></div>
            <div class="class-header">
              <h3 class="class-name text-indigo fs-5">${prop.nome_materia}</h3>
              <div class="class-teacher text-gray fs-6"><i class="bi bi-person"></i>${prop.docente_teoria}</div>
            </div>
            <ul class="list-group">
              <li class="list-group-item"><span class="badge bg-indigo">QUA</span> <span class="badge bg-secondary">19h00
                  - 21h00</span> <span class="badge bg-indigo">SI</span></li>
              <li class="list-group-item"><span class="badge bg-indigo">QUA</span> <span class="badge bg-secondary">21h00
                  - 23h00</span> <span class="badge bg-indigo">SII</span></li>
              <li class="list-group-item"><span class="badge bg-indigo">SEX</span> <span class="badge bg-secondary">19h00
                  - 21h00</span></li>
            </ul>
            <div class="class-body bottom-item">
              <div class="container-fix">
                <div class="col-12"><span class="rounded-text bg-gray text-dark">Sala 107</span> <span
                    class="rounded-text bg-gray text-dark">Santo André</span></div>
              </div>
            </div>
          </div>`
        element.classList.add("col-12")
        element.classList.add("col-sm-6")
        element.classList.add("col-lg-4")

        document.getElementById("calendario").appendChild(element)
    }
}