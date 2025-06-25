function crearContador() {
  let contador = 0; 
  return function () {
    contador++;
    return contador;
  };
}


const contador = crearContador();

console.log(contador()); 
console.log(contador()); 
console.log(contador()); 
