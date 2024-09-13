const form = document.querySelector(".wrapper");
const quantideCafePessoa = 120;

form.addEventListener("submit", e => {
    e.preventDefault();

    const quantidadePessoas = pegarQuantidadePessoas();

    const quantidadeAgua = pegarQuantidadeAgua(quantidadePessoas);

    const quantidadeColheres = pegarColheres(quantidadeAgua);

    if (quantidadeAgua > 1000) maisCafeteiras(quantidadeAgua);
});

function maisCafeteiras() {
    const restoAgua = quantidadeAgua - 1000;
    const quantidadeColheres = pegarColheres(restoAgua);
}

function pegarQuantidadeAgua(quantidadePessoas) {
    return quantidadePessoas * quantidadeCafePessoa;
}

function pegarColheres(quantidadeAgua) {
    return quantidadeAgua / 250;
}

function pegarQuantidadePessoas() {
    let quantidadePessoas = document.querySelector(".quantidade_pessoas").value;
    quantidadePessoas = Number(quantidadePessoas);
    return quantidadePessoas;
}