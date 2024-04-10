const form = document.getElementById('form-contato');
const nomes = [];
const telefones = [];

let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const inputNome = document.getElementById('nome-contato');
    const inputTelefone = document.getElementById('telefone-contato');

    nomes.push(inputNome.value);
    telefones.push(inputTelefone.value);

    let linha = '<tr>';
    linha += `<td>${inputNome.value}</td>`
    linha += `<td>${inputTelefone.value}</td>`
    linha += `<tr>`

    linhas += linha;

    inputNome.value = '';
    inputTelefone.value = '';

    atualizaTabela();
});

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}