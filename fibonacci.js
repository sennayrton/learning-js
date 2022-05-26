/*
Serie completa: 0,1,1,2,3,5,8,13,21,34,55 
Resultado de la serie fibonnacci: 55 
1) Crear una funcion con parametro numero
2) Crear una variable con los dos primeros numeros de la serie
3) Bucle desde dos al numero
4) Sumar los dos anteriores valores a numero actuaL
5) Devolvemos el resultado. 
*/

function fibonacci (numero){ 
    let serie = [0, 1];

    for(let i = 2; i <= numero; i++){
        serie.push(serie[i - 1] + serie[i - 2]);
    }

    return [serie, serie[numero]];

}

console.log("Serie completa: ", fibonacci(15)[0]);
console.log("Resultado fibonacci: ", fibonacci(15)[1]);