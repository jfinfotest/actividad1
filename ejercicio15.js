
function procesar(array, callback) {
    return array.map(callback);
}


console.log(procesar([1, 2, 3], num => num * 2));
