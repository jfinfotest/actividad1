function componer(f1, f2) {
    return function(x) {
        return f2(f1(x));
    };
}



const duplicar = x => x * 2;
const sumarDiez = x => x + 10;


const combinada = componer(duplicar, sumarDiez);


console.log(combinada(5));

