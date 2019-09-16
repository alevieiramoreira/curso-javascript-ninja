/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var newArr = [1, 2, 3, 4, 5];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function receiveArr(arr){
    return arr;
}


/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
receiveArr(newArr)[1];

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
function testValues(arr, index){
    return arr[index];
}

//console.log( testValues( ['a', 'l', 'e'], 2 ) );

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var myArr = ['Ale', 2 , true, null, {prop: 'string'}];


/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/

console.log(testValues(myArr, 0));
console.log(testValues(myArr, 1));
console.log(testValues(myArr, 2));
console.log(testValues(myArr, 3));
console.log(testValues(myArr, 4));


/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/
function book( bookName ){
    var books = {
        'Harry Potter': { numberOfPages: 300, author: 'JK Rowling', publisher: 'Bloomsbury' },
        'Hunger Games': { numberOfPages: 205, author: 'Suzanne Collins', publisher: 'Scholastic' },
        'Percy Jackson': { numberOfPages: 400, author: 'Rick Riordan', publisher: 'Puffin' },
    };

    return !bookName? books : books[bookName];
    
}


/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
console.log(book());

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
console.log(`O livro Harry Potter tem ${book('Harry Potter').numberOfPages} páginas!`);

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log(`O autor do livro Percy Jackson é do autor ${book('Percy Jackson').author}.`);

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log(`A editora do livro Hunger Games é ${book('Hunger Games').publisher}.`);
