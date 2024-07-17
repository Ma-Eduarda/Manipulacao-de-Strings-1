function abbrevName (nomeComp) { // Define a função 'abbrevName'
  let partes = nomeComp.split(' '); // Divide o nome em partes usando espaços como delimitador
  let primeiroNome = partes[0]; // Pega o primeiro nome
  let inicialSobrenome = partes[partes.length - 1][0] + '.'; // Pega a primeira letra do último nome e adiciona um ponto
  return primeiroNome + ' ' + inicialSobrenome; // Junta o primeiro nome e a inicial do último nome com um espaço no meio
}

console.log(abbrevName("João da Silva")); // "João S."
console.log(abbrevName("Robin Hood")); // "Robin H."
