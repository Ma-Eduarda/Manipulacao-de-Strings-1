function iniCut (string, length) { //Define a função "iniCut" com a string da qual extrair os caracteres e length (o número de caracteres para extrair)
  return string.substring(0, length); // Usa o 'substring()' para extrair os caracteres da string 
}


console.log(iniCut('céu azul', 3)); // "céu"
console.log(iniCut("Round Robin",4)); // "Roun"

