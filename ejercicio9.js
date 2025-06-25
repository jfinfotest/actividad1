function multiplicar(...numeros) {
  return numeros.reduce((producto, valor) => producto * valor, 1);
}


console.log(multiplicar(2, 3, 4)); 
console.log(multiplicar(5, 2));    
console.log(multiplicar());        
