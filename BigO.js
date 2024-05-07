//O(n), O(n^2), O(nlogn)

// Big o nada mais é do que uma forma de mensurar a complexidade de 
// um algoritmo relacionado ao tempo de execução e ao espaço (memória) 
// utilizado para executar o algoritmo.

//Big O estabelece o pior caso para o tempo de execução

// NOTAÇÃO BIG O	  ALGORITMO DE EXEMPLO
// O(log n)	           Busca binária
// O(n)	               Busca simples
// O(n * log n)	      Ordenação Quicksort
// O(n2)	          Ordenação de seleção
// O(n!)	         Problema do caixeiro viajante

//https://hackernoon.com/the-big-o-notation-in-javascript
//https://www.bigocheatsheet.com/

//REGRAS DO BIG O

//1. Ignorar as constantes
//2. Ignorar os termos de ordem menor
//3. Considerar o pior cenário

//O(1) Operação de Cuto Fixo
//O(n) Laço/Percorre a entrada
//O(log n) "Dividir para conquistar"


/* ********************************************************************* */

function anotherBigOChallenge(input) {
  let a = 5; //O(1)
  let b = 10; //O(1)
  let c = 50; //O(1)
  for (let i = 0; i < input; i++) { //O(n) //O(n^2)
    for (let i = 0; i < input; i++) {
      let x = i + 1; //O(1)
      let y = i + 2; //O(1)
      let z = i + 3; //O(1)
    }
  }

  for (let j = 0; j < input; j++) { //O(n)
    let p = j * 2; //O(1)
    let q = j * 2; //O(1)
  }
  let whoAmI = "I don't know"; //O(1)
}

//O(n) - complexidade final sem o segundo for

/* ********************************************************************* */


//Exemplo Big O quadrática
//A letra "n" representa o tamanho da entrada, 
//enquanto a função "g(n) = n²" interna ao "O()" nos dá a ideia da 
//complexidade do algoritmo em relação ao tamanho da entrada.

//  Para garantir que o i-ésimo elemento seja o i-ésimo menor 
//   elemento da lista, este algoritmo itera primeiramente por toda 
//   a lista por meio de um laço for. Depois, para cada elemento, 
//   ele usa outro laço for para encontrar o menor elemento na 
//   parte restante da lista.

// SelectionSort(Lista) {
//     for (i = 0; Lista.Length; i++) {
//         MenorElemento = Lista[i];
//         for (j = 0; Lista.Length; i++) {
//             if (MenorElemento > Lista[j]) {
//                 MenorElemento = Lista[j];
//             }
//         }
//         Inverte(Lista[i], MenorElemento);
//     }
// }

//   o laço interno se repetirá 1+2 … + n vezes, o que é
//   igual a n(n-1)/2 vezes.
//   Se multiplicarmos isso, teremos n²/2-n/2.


/* ********************************************************************* */

//Exemplo O(n)

//For loop
for (let i = 0; i < n; i++) {
  console.log(i)
}

//While loop
let i = 0
while (i < n) {
  console.log(i)
  i++
}

//Do while loop
do {
  console.log(i)
  i++
} while (i < n)

//Factorial
function factorial(n) {
  if (n === 0) {
    return 1
  }
  return n * factorial(n - 1)
}

//Fibonacci
function fibonacci(n) {
  if (n <= 1) {
    return n
  }
  return fibonacci(n - 1) + fibonacci(n - 2)
}

//   Linear search
function linearSearch(arr, value) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) {
      return i
    }
  }
  return -1
}

/* ********************************************************************* */

//O(log(n))

//Binary search
function binarySearch(arr, value) {
  let start = 0
  let end = arr.length - 1
  let middle = Math.floor((start + end) / 2)
  while (arr[middle] !== value && start <= end) {
    if (value < arr[middle]) {
      end = middle - 1
    } else {
      start = middle + 1
    }
    middle = Math.floor((start + end) / 2)
  }
  if (arr[middle] === value) {
    return middle
  }
  return -1
}

/* ********************************************************************* */

//O(n^2)

//Bubble sort
function bubbleSort(arr) {
  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = temp
      }
    }
  }
  return arr
}

//Selection sort
function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let lowest = i
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[lowest]) {
        lowest = j
      }
    }
    if (i !== lowest) {
      let temp = arr[i]
      arr[i] = arr[lowest]
      arr[lowest] = temp
    }
  }
  return arr
}

/* ********************************************************************* */

//O(n log(n))

//Merge sort
function mergeSort(arr) {
  if (arr.length <= 1) return arr
  let mid = Math.floor(arr.length / 2)
  let left = mergeSort(arr.slice(0, mid))
  let right = mergeSort(arr.slice(mid))
  return merge(left, right)
}

function merge(left, right) {
  let results = []
  let i = 0
  let j = 0
  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      results.push(left[i])
      i++
    } else {
      results.push(right[j])
      j++
    }
  }
  while (i < left.length) {
    results.push(left[i])
    i++
  }
  while (j < right.length) {
    results.push(right[j])
    j++
  }
  return results
}