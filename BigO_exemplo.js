//O(n^2)


function meuNumero(numero) {
    for (let i = 1; i <= numero; i++) {
        linha = "";

        for (let i = 1; i < numero; i++) {
            linha = linha + " " + numero;

        }

        console.log(linha);
    }
    console.log('Seu número é o %s', numero);
}

meuNumero(5);


/* ********************************************************************* */

//O(n)

function meuNumero(numero) {
    linha = "";

    for (let i = 1; i <= numero; i++) {
        linha = linha + " " + numero;

    }
    for (let i = 1; i < numero; i++) {

        console.log(linha);
    }

    console.log('Seu número é o  %s', numero);
}

meuNumero(5);