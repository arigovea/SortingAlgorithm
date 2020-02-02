//Merge Sort

const array = [];

function Mezclado(array) { //Entra arreglo original
    if (array.length === 1) { //Si el arreglo a separar es igual a 1, se rompe el ciclo porque ya no se puede dividir
        return array;     //Regresa el valor que tiene el arreglo, un valor
    }
    redondeo = Math.floor(array.length / 2); //Se hace un promedio al numero anterior, porque impares = 1.5
    let arrayder = array.slice(0, redondeo); //Se hace la separacion del lado derecho, se corta del valor inicial hasta uno antes de la mitad
    let arrayizq = array.slice(redondeo); //Se hace la separacion del lado izquierdo, se corta despues de la mita

    var DO = Mezclado(arrayder); // Se hace un callback de la funcion Mezclado para dividir ese lado hasta que length = 1
    var IO = Mezclado(arrayizq); // Se hace un callback de la funcion Mezclado para dividir ese lado hasta que length = 1
    let arrayord = []; //Contenedor ordenado
    while (DO.length > 0 && IO.length > 0) { //El ciclo va a parar hasta que ambos arreglos ya no tengan nada adentro
        if (IO[0] > DO[0]) { //Si el valor del lado izquierdo es mayor que el lado derecho
            arrayord.push(DO[0]); //Se agrega el menor valor a la nueva matriz
            DO.shift(); //Se saca del arreglo original (DO)
        }
        else {
            arrayord.push(IO[0]); // Si el valor de io es == a do o menor, agregar a arreglo nuevo.
            IO.shift(); // Se saca del arreglo original (IO)
        }
    }
    return arrayord = [...arrayord, ...DO, ...IO]; //concatena todos los valores posibles de todos los arreglos
}
console.log(Mezclado([80,2,123,23,34]));