function validarArray(array, len) {
    try {
        if (!array && !len) throw new ReferenceError("Envie os parâmetros");
        if (typeof (array) !== 'object') throw new TypeError("Entre com um array do tipo Object");
        if (typeof (len) !== 'number') throw new TypeError("Entre com um número do tipo Number");
        if (array.length !== len) throw new RangeError("Entre com um array com o mesmo comprimento do número");

        return array;
    } catch (error) {
        if (error instanceof ReferenceError) {
            console.log("Este erro é um ReferenceError");
            console.log(error.message);
        } else if (error instanceof TypeError) {
            console.log("Este erro é um TypeError");
            console.log(error.message);
        } else if (error instanceof RangeError) {
            console.log("Este erro é um RangeError");
            console.log(error.message);
        } else {
            console.log("Tipo de erro não esperado: " + error);
        }
    }
}

console.log(validarArray([1, 2], 3));
