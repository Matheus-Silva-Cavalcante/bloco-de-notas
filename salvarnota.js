let notas = localStorage.notas ? JSON.parse(localStorage.notas) : [];

function salvarNota() {
    localStorage.setItem('notas', JSON.stringify(notas));
};