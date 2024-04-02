let problema = "Z = -2x + 2y\nsujeto a\n2x + 1y <= 100\n1x+2y<=80\n1x + 0y <= 45\n0x + 1y <= 100";

// Expresión regular para extraer los coeficientes y las restricciones
const regex = /(-?\d+)x\+?(-?\d+)y(<=|>=|=)(-?\d+)/g;

let restricciones = [];


// Usar un bucle para encontrar todas las restricciones

let ptrim = problema.replace(/ /g, "")
let arrCoef = ptrim.split("\n").slice(2);

console.log(arrCoef)
arrCoef.forEach(inec => {
    const match =  regex.exec(inec);
    if (match !== null) {
        let coeficienteX = parseInt(match[1]);
        let coeficienteY = parseInt(match[2]);
        let operador = match[3];
        let valor = parseInt(match[4]);
        restricciones.push({ coeficienteX, coeficienteY, operador, valor });
        regex.lastIndex = 0;
    }

})

console.log(restricciones);
