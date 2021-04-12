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

    document.getElementById("ra-aluno").innerText = dados.ra
    for (var i = 0; i < dados.turmas.length; i++) {
        var prop = dados.turmas[i]
        var element = document.createElement("div")
        element.innerHTML = `
        <div class="p-3 class-block force-bottom">
          <div class="class-icon"><i class="bi bi-journal-bookmark text-indigo"></i></div>
          <div class="class-header">
            <!--nome da matéria-->
            <h3 class="class-name text-indigo fs-5">${prop.nome_materia}</h3>
            <!--docentes-->
            <div class="class-teacher text-gray fs-6"><i class="bi bi-person-plus"></i> ${prop.docente_teoria}</div>
            <div class="class-teacher text-gray fs-6"><i class="bi bi-person-dash"></i> ${prop.docente_pratica}</div>
          </div>
          <!--lista de aulas na semana-->
          <ul class="list-group">
            <!--item de aula 1 da semana-->
            ${prop.dia1 != "" ? `<li class="list-group-item">
                <span class="badge bg-indigo">${prop.dia1}</span>
                <span class="badge bg-secondary">${prop.horario1}</span>
                <span class="badge bg-indigo">${prop.rotacao1}</span>
            </li>` : ""}
            ${prop.dia2 != "" ? `<li class="list-group-item">
                <span class="badge bg-indigo">${prop.dia2}</span>
                <span class="badge bg-secondary">${prop.horario2}</span>
                <span class="badge bg-indigo">${prop.rotacao2}</span>
            </li>` : ""}
            ${prop.dia3 != "" ? `<li class="list-group-item">
                <span class="badge bg-indigo">${prop.dia3}</span>
                <span class="badge bg-secondary">${prop.horario3}</span>
                <span class="badge bg-indigo">${prop.rotacao3}</span>
            </li>` : ""}
            ${prop.dia4 != "" ? `<li class="list-group-item">
                <span class="badge bg-indigo">${prop.dia4}</span>
                <span class="badge bg-secondary">${prop.horario4}</span>
                <span class="badge bg-indigo">${prop.rotacao4}</span>
            </li>` : ""}
          </ul>
        </div>
      </div>`
        element.classList.add("col-12")
        element.classList.add("col-sm-6")
        element.classList.add("col-lg-4")

        document.getElementById("calendario").appendChild(element)
    }
}