bntSalvarNota.addEventListener('click', () => {
    const nota = {
        titulo: inputTituloNota.value,
        texto: textareaTextoNota.value,
        cor: inputCorNota.value,
        corFonte: definirCorFonte(inputCorNota.value)
    };

    let deuErro = false;

    if (nota.titulo.length === 0) {
        alertCampoVazioTitulo.style.display = '';
        inputTituloNota.classList.add('erro');
        deuErro = true;
    } else {
        alertCampoVazioTitulo.style.display = 'none';
        inputTituloNota.classList.remove('erro');
    };

    if (nota.texto.length === 0) {
        alertCampoVazioTexto.style.display = '';
        textareaTextoNota.classList.add('erro');
        deuErro = true;
    } else {
        alertCampoVazioTexto.style.display = 'none';
        textareaTextoNota.classList.remove('erro');
    };
    

    if(deuErro) return;

    notas.push(nota);
    salvarNota();
    location.href = '/';
});

bntCancelarNota.addEventListener('click', () => {
    location.href = '/';
});

function definirCorFonte(background){
    //debugger
    var hex = background;
    var r, g, b, lum;

    hex = hex.replace('#', '');

    r = parseInt(hex.substr(0, 2), 16);
    g = parseInt(hex.substr(2, 2), 16);
    b = parseInt(hex.substr(4, 2), 16);

    lum = (r * 299 + g * 587 + b * 114) / 1000;

    if (lum > (255 / 2)) {
        return '#000000'
    } else {
        return '#ffffff'
    };
};
