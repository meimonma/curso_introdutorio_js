console.log('***********************************************');
console.log('aula')
let idade = 18;

if (idade >= 18) {
    console.log('Você é maior de idade')
} else {
    console.log('VOcê é menor de idade')
}

/*
desafio 1
Crie um código para validar se pode ou não dirigir o carro 
Idade permitida para dirigir deve ser 18

desafio 2
Criar um código para receber 3 anotas (n1, n2 e n3)
Validar se a média foi maior ou menor a 7
7 ou mais aluno aprovado, inferior a 7 aluno reprovado
*/
console.log('***********************************************');
console.log('desafio 1:');
let idade1 = 18;

if (idade1 >= 18) {
    console.log('Você pode dirigir, tem ' + idade1 + ' anos.')
} else {
    console.log('Você não pode dirigir, tem ' + idade1 + ' anos.')
}

console.log('***********************************************');
console.log('desafio 2:');

let nota1 = 7;
let nota2 = 8;
let nota3 = 10;
let media = (nota1 + nota2 + nota3) / 3;

if (media >= 7) {
    console.log('Parabéns, você foi aprovado e sua note é ' + media);
} else {
    console.log('Você foi reprovado, sua nota é ' + media);
}