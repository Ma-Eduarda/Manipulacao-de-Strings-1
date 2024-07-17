function toArray (string) {  // Define a função chamada ' toArray' 
  return string.split(' '); // Usa o 'split()' para dividir a string, usando os espaços em branco como delimitador
                            
}


console.log(toArray("o céu é azul")); // ['o', 'céu', 'é', 'azul']
console.log(toArray("Round Robin")); // ['Round', 'Robin']
 