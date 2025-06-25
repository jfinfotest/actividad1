function promedio(...numeros) {
    if (numeros.length === 0) return 0;


    const suma = numeros.reduce((total, num) => total + num, 0);
    return suma / numeros.length;
}


console.log(promedio(10, 20, 30));
