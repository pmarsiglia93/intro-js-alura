console.log(`trabalhando com condicionais`);

const listaDeDestinos = new Array(
    `Salavador`,
    `São Paulo`,
    `Rio de Janeiro`,
    `Curitiba`,
    `Recife`,
);

const idadeComprador = 17;
const estaAcompanhada = true;

console.log("Destinos possíveis: ");
console.log(listaDeDestinos);

if (idadeComprador >= 18) {

    console.log("Comprador maior de idade")
    listaDeDestinos.splice(1, 1);
} else if (estaAcompanhada == true) {
    console.log("Comprador está acompanhado")
    listaDeDestinos.splice(1, 1);
} else {
    console.log("Não é maior de idade e não posso vender");
}

console.log(listaDeDestinos);

// console.log(idadeComprador > 18);
// console.log(idadeComprador < 18);
// console.log(idadeComprador <= 18);
// console.log(idadeComprador >= 18);
// console.log(idadeComprador == 18);
