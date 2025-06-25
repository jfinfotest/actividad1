(function() {
    const mensaje = "¡Soy una IIFE!";
    console.log(mensaje); // Imprime: ¡Soy una IIFE!
})();

console.log(typeof mensaje); // Imprime: undefined (mensaje no está en el ámbito global)