function isEmpty (string) {    // Cria a função 'isEmpty' 
  return string.trim().length === 0;    // Remove os espaços em branco no início e no final da string usando o "trim()"
                                        // Verifica se o comprimento é igual a zero
}


console.log(isEmpty('')); //true      
console.log(isEmpty('      '));  //true
console.log(isEmpty('abc')); //false
console.log(isEmpty('   123    ')); //false
