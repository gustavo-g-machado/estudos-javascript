const nome = 'Gustavo';
const sobrenome = 'Machado';
const idade = 22;
const peso = 55;
const alturaEmM = 1.60;
let indiceMassaCorporal;
let anoNascimento;

anoNascimento = 2024 - idade;
indiceMassaCorporal = peso / (alturaEmM * alturaEmM);

// template string

console.log(`${nome} ${sobrenome} tem ${idade} anos pesa ${peso} kg`);
console.log(`tem ${alturaEmM} de altura e seu IMC é de ${indiceMassaCorporal}`);
console.log(`${nome} nasceu em ${anoNascimento} .`);