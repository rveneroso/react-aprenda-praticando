const number = 10;

// Essa linha não é válida. Não é possível reatribuir o valor de uma constante através de
// seu identificador
// number = 15;

console.log('Number vale ' + number);

/*
  A função abaixo pode dar a impressão de que o valor da variável number está sendo alterado. Porém,
  ao executar o código, após a execução da função mudaNumber, verifiquei que o valor da variável 
  number permaneceu inalterado.
  Mesmo o nome do parâmetro da função sendo o mesmo da constante, o JavaScript tratou o parâmetro
  number limitado ao escopo da função. Quando essa encerrou sua execução, o valor original da
  constante number ficou preservado.
*/
let mudaNumber = (number) => number * 2;

console.log( mudaNumber(number) );
console.log('Após execução da função, Number vale ' + number);