function crearSaludo(saludoBase) {
    return function(nombre) {
        return `${saludoBase}, ${nombre}`;
    };
}



const saludarConHola = crearSaludo("Hola");
console.log(saludarConHola("Papa"));


const saludarConHey = crearSaludo("Soy");
console.log(saludarConHey("Jhonatan"));
