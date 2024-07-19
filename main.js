const containerNota = document.querySelector('#containerNota');

function exibirNota(nota, indice) {
    const divNota = document.createElement('div');
    divNota.classList.add('nota');
    divNota.setAttribute('data-nota-indice', indice);
    divNota.style.background = nota.cor;
    divNota.style.color = nota.corFonte;
    divNota.innerHTML = `
        <div class="nota__div-excluir">
            <button href="#" class="nota-bnt-excluir">
                <i class="icon-cross"></i>
            </button>
        </div>
        
        <div class="nota-conteudo">          
            <h3 class="nota-titulo">
                ${nota.titulo}
            </h3>
        
            <div class="nota-texto">
                <div class="nota-campo-texto">
                    ${nota.texto}
                </div>
            </div>
        </div>
    `
    
    containerNota.append(divNota);
    document.querySelector(`[data-nota-indice="${indice}"] .nota-bnt-excluir`).addEventListener('click', () => {

        const confirmaRemocao = confirm('Deseja excluir essa nota?');

        if (confirmaRemocao) {
            delete notas[indice];

            salvarNota();

            divNota.remove();
        };                      
    });
};

notas.forEach((nota, indice) => {
    if (nota) {        
        exibirNota(nota, indice);
    };
});


