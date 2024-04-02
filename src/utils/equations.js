export const isValid = (eq, x, y) => {
    let res = x * eq.coeficienteX + y * eq.coeficienteY

    if (eq.operador == "<=") {
        return res <= eq.valor
    }
    if (eq.operador == ">=") {
        return res >= eq.valor
    }
    if (eq.operador == "=") {
        return res === eq.valor
    }
}


export const getZeros = (eq) => {
    return {
        x: [eq.valor / eq.coeficienteX, 0],
        y: [0, eq.valor / eq.coeficienteY]
    }
}

export const intersecc = (eq1, eq2) => {
    let  matriz = [[eq1.coeficienteX, eq1.coeficienteY, eq1.valor],
    [eq2.coeficienteX, eq2.coeficienteY, eq2.valor]
    ]
    
    let newMatriz = [[0, 0, 0],
        [0, 0, 0]]
    
    for (let i = 0; i < 3; i++) {
        newMatriz[0][i] = matriz[0][i] + (matriz[0][1] / matriz[1][1] * -1) * matriz[1][i]
        newMatriz[1][i] = matriz[1][i] + (matriz[1][0] / matriz[0][0] * -1) * matriz[0][i]
    }
    console.log(newMatriz)

    let div1 = newMatriz[0][0]
    let div2 = newMatriz[1][1]

    for (let s = 0; s < 3; s++) {
        newMatriz[0][s] = newMatriz[0][s] / div1
        newMatriz[1][s] = newMatriz[1][s] / div2
    }

    console.log("x:", newMatriz[0][2])
    console.log("y:", newMatriz[1][2])

    return {x:newMatriz[0][2],y:newMatriz[1][2]}


}