function isString (valor) {     // Define a função "isString" 
  if (typeof valor === 'string') {    // Verifica se o valor é uma string
    console.log('É uma string');    // Se for uma string, imprime a mensagem "É uma string" no console
  } else {     // Se não for uma string, imprime a mensagem "Não é uma string" no console
    console.log('Não é uma string');
  }
}  //return typeof verificar === 'string'

isString('w3resource'); //true
isString([1, 2, 4, 0]); //false
