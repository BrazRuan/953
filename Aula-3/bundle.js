"use strict";
var funcao_teste = function funcao_teste(a){
    var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1]:2;
    return a+b;
}

var resultado = funcao_teste(4,2);
console.log(resultado);


