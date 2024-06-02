const livro = `
Livro 'React' do "Maujor"`;
// O comando abaixo imprime tudo em uma única linha porque, na definição da variável livro, a 
// quebra de linha está depois da primeira crase mas antes do início da string. Portanto, a quebra
// não faz parte da string em si e por isso não é impressa.
console.log(livro);
// Livro 'React' do "Maujor"

const livro1 = `Livro 'React'
do "Maujor"`;
console.log(livro1);
// Livro 'React'
//do "Maujor"

const marcacao = `<!DOCTYPE html>
<html lang="pt-br">
  <head>
    ...
  </head>
  <body>
    ...
  </dody>
  </html>`;
console.log(marcacao);

let calculaPrecoComDesconto = (preco, desconto) => {
  return preco * desconto;
}

// ---------------------------
const titulo = `Livro React do "Maujor"`;
const preco = 80;
// Abaixo temos o uso de crase dentro de crase. Na string titulo temos crase como separador e
// na variável mensagem (definida abaixo) também temos crase. Observar que o símbolo $
// é usado duas vezes para se obter um único $ (funciona como caracter de escape).
const mensagem = `O preço normal do ${titulo} é de R$${preco},00
Na promoção o preço cai para R$${calculaPrecoComDesconto(preco,0.8)},00`;

console.log(mensagem);