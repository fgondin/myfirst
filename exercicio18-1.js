 var menu = `
ESCOLHA UMA OPÇÃO
(1) Soma
(2) Subtração
(3) Multiplicação
(4) Divisão
`;

var opcao = prompt (menu);
var num1 = Number(prompt(`Digite um número.`));
var num2 = 0;

switch (opcao){
    case `1`:
    while (num2 < 10){
        (num2 ++);
        var num3 = num1 + num2;
        console.log (`${num1} + ${num2} = ${num3}`);
    }
    break;

    case `2`:
    while (num2 < 10){
        (num2 ++);
        var num3 = num1 - num2;
        console.log (`${num1} - ${num2} = ${num3}`);
    }
    break;

    case `3`:
    while (num2 < 10){
        (num2 ++);
        var num3 = num1 * num2;
        console.log (`${num1} * ${num2} = ${num3}`);
    }
    break;

    case `4`:
    while (num2 < 10){
        (num2 ++);
        var num3 = num1 / num2;
        console.log (`${num1} / ${num2} = ${num3}`);
    }
    break;

    default:
        console.log (`Opção invalida.`);
};
