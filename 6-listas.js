console.log(`trabalhando com listas`);

// const salvador = `Salvador`;
// const saoPaulo = `São Paulo`;
// const rioDeJaneiro = `Rio de Janeiro`;

const listaDeDestinos = new Array(
    `Salavador` , 
    `São Paulo`,
    `Rio de Janeiro`,
    `Curitiba`,
    `Recife`,
);

listaDeDestinos.push(`Alagoas`) // Adicionando um item na lista depois que ela foi delcarada.

console.log("Destinos possíveis: ");
//console.log(salvador, saoPaulo, rioDeJaneiro); 
console.log(listaDeDestinos);

listaDeDestinos.splice(1,1); // Posição 2 e 1 elemento.
console.log(listaDeDestinos);


console.log(listaDeDestinos[1], listaDeDestinos[0]);