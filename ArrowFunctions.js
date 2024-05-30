function saudacao() {
    return "Olá visitante.";
}
console.log( saudacao() );

/*
 A mesma função acima escrita com ArrowFunction.
 Como não temos a palavra return, toda a função é declarada em uma única linha.
 Observar que a palavra reservada function foi omitida.
*/
let saudacao2 = () => "Olá visitante 2!";
console.log( saudacao2() );

/*
  Caso eu ainda deseje escrever o retorno da função em mais de uma linha SEM USAR a palavra reservada
  return, devo utilizar parênteses. Observar que, nesse caso o ; ficará após o fecha parênteses e
  não na linha contendo o retorno da função.
*/
let saudacao3 = () => (
    "Olá visitante 3!"
);
console.log( saudacao3() );

// Exemplos de funções que recebem parâmetros

// Função tradicional (ES5 e anteriores)
function dobrar(x) {
    return x * 2;
}
console.log( dobrar(5) );

let dobrar2 = (x) => x * 2;
console.log( dobrar2(5) );

/*
  Nas funções que admitem um ou nenhum parâmetro, o sinal de parênteses envolvendo o parâmetro é
  opcional, e geralmente não é usado.
  Assim, a função acima pode ser reescrita como abaixo.
*/
 let dobrar3 = x => x * 2;
 console.log( dobrar3(25) );

 let dobrar4 = x => (
    x * 2
 );
 console.log( dobrar4(9) );

 // Mesma função acima, agora com return
 let dobrar5 = x => {
    return x * 2;
 }
 console.log( dobrar5(64) );

 // Exemplo de função que recebe mais de um parâmetro
 function avaliar(x, y, z) {
    if(x < 10) {
        return y + z;
    } else {
        return y * z;
    }
 }
 console.log( avaliar(8, 5, 2) ); // Deve retornar 7
 console.log( avaliar(18, 14, 125) ); // Deve retonar 1750

 // Função reescrita utilizando o operador ternário
 let avaliar2 = (x, y, z) => x < 10 ? y + z : y * z;
 console.log( avaliar2(8, 5, 2) ); // Deve retornar 7
 console.log( avaliar2(18, 14, 125) ); // Deve retonar 1750

 // O operador ternário pode ser quebrado em várias linhas.
 let avaliar3 = (x, y, z) => (
    x < 10      // Condição
    ? y + z     // Se condição = true. A linha começa com ?
    : y * z     // Se condição = false. A linha começa com :
 );
 console.log( avaliar3(8, 5, 2) ); // Deve retornar 7
 console.log( avaliar3(18, 14, 125) ); // Deve retonar 1750

 // É possível criar uma função anônima que pode ser invocada na própria linha onde é declarada.
 // Isso é conhecido como IIF3 - Immediately Invoked Function Expression.
 console.log ( (x => 2 * x) (40) ); // O resultado deve ser 80;