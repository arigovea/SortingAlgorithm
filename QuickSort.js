//Quicksort 
function Quicksort(array) { //Ingresa el arreglo
    if (array.length <= 1) { //Se compara si la longitud del arreglo es igual a 1 para que ya no entre al for
        return array; // Regresa ese valor del arreglo
    }
    let menores = []; //Arreglos para ir colocando los valores de las separaciones hechas.
    let mayores = [];
    let pivote = array[0]; //Se asigna que el primero valor de cada array sea el pivote a comparar
    for (i = 1; i < array.length; i++) {
        if (pivote > array[i]) {
            menores.push(array[i]);
        }
        else {
            mayores.push(array[i]);
        }
    }
    let menoresOrd = Quicksort(menores);
    let mayoresOrd = Quicksort(mayores);
    let arrayQS = [...menoresOrd, pivote, ...mayoresOrd];
    return arrayQS;
}
console.log(Quicksort([3, 55, 6, 21, 9, 22, 5, -1, 232, 55, 0, 34, -223]));
