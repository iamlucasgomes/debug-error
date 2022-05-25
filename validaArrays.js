function validaArrays(array, num) { //criei uma função onde determinei dois arrays, um array e um número

    try { // usei o metodo try para fazer a validação do array e numero
        if (!array && !num) { // se o array e o numero não for preenchido
            throw new ReferenceError('Envie os parâmetros!'); // retornamos uma mensagem de erro com o throw
        }
        if (typeof array !== 'object') { // se o tipo do array não for um objeto
            throw new TypeError('Envie um elemento do tipo Array!'); // retornamos uma mensagem de erro com o throw
        }
        if (typeof num !== 'number') { // se o tipo do num não for Number
            throw new TypeError('Envie um elemento do tipo Number!'); // retornamos uma mensagem de erro com o throw
        }
        if (array.length !== num) { // se o tamanho do array for diferente do num
            throw new RangeError('Tamanho do array inválido!'); // retornamos uma mensagem de erro com o throw
        }
        return array;
    } catch (erro) { // o catch contém declarações que especificam o que fazer caso uma exceção seja lançada no bloco
        if (erro instanceof RangeError) { // Filtra as chamadas de catch por cada tipo de erro utilizando o operador instanceof
            console.log('RangeError!'); // imprimimos a seguinte mensagem
            console.log(erro.stack); // imprimimos o throw declarado
        } else if (erro instanceof ReferenceError) { // Filtra as chamadas de catch por cada tipo de erro utilizando o operador instanceof
            console.log('ReferenceError!'); // imprimimos a seguinte mensagem
            console.log(erro.stack); // imprimimos o throw declarado
        } else {
            console.log('Outro tipo de erro!'); // imprimimos a seguinte mensagem
            console.log(erro.stack); // imprimimos o throw declarado
        }
    }
}

console.log(validaArrays([1, 2, 3], 0));