import { intersecc } from "./equations.js";


let eq1 = 
    { coeficienteX: 2, coeficienteY: 1, operador: '<=', valor: 100 }

let eq2 =
{ coeficienteX: 1, coeficienteY: 2, operador: '<=', valor: 80 }

intersecc(eq1,eq2)