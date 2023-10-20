const prompt = require("prompt-sync")({ sigint: true });
let numero = 0;
let factorial = 1;
 
    do{
        numero = parseInt(prompt("Ingrese un número para calcular su factorial: "));
        if(!isNaN(numero)){
            for (let i=2; i<=numero; i++){
                factorial=factorial*i;
            }
            console.log("El factorial de "+numero + " es: " + factorial);
        } else {
            console.log("Debe ingresar un dato numérico");
        }

    }while (isNaN(numero));