const questions = [
{
  id: 1,
  question: "Veja a comparação entre os algoritmos de ordenação Insertion Sort, Quicksort e Merge Sort.",
  isImageSequence: true,
  sequence: [
    {
      image: "video4-1.png",
      description: "Temos uma lista completamente desordenada. Vamos ver como cada algoritmo se comporta para organizá-la!"
    },
    {
      image: "video4-2.png",
      description: "O Insertion Sort compara cada elemento com os anteriores, inserindo-o na posição certa. Funciona bem com listas pequenas ou quase ordenadas."
    },
    {
      image: "video4-3.png",
      description: "O Quicksort escolhe um pivô, separa em menores e maiores, e aplica o mesmo processo em cada parte. É geralmente muito rápido."
    },
    {
      image: "video4-4.png",
      description: "O Merge Sort divide a lista em partes bem pequenas, ordena cada uma e depois junta tudo em ordem. É confiável, mas usa mais memória."
    },
    {
      image: "video4-5.png",
      description: "Veja como funciona cada método: Insertion Sort insere elementos aos poucos, ideal para listas quase ordenadas. Quicksort separa por um pivô e é rápido na maioria dos casos. Merge Sort divide, ordena e junta, sempre garantindo estabilidade."
    }
  ],
    options: [
    {
      id: 1,
      text: "Já entendi!",
      isSkip: true
    }
  ]
},
{
  id: 2,
  question: "Não existe um algoritmo perfeito, cada um tem sua força! Saber qual usar depende da situação. O truque é escolher o mais esperto para cada desafio.",
  isWhiteBackground: true,
  image: {
    name: null,
    url: "l5q0_a"
  },
  options: [
    {
      id: 1,
      text: "Avançar",
      isSkip: true
    }
  ]
},
  {
    id: 3,
    question: "Qual algoritmo costuma ser mais rápido em listas grandes e desordenadas?",
    image: {
      name: null,
      url: "l5q1_a"
    },
    options: [
      { id: 1, text: "Quicksort", answerIndex: true },
      { id: 2, text: "Merge Sort", answerIndex: false },
      { id: 3, text: "Insertion Sort", answerIndex: false },
      { id: 4, text: "Depende do tipo da lista", answerIndex: false }, // ou true, se quiser abrir discussão
    ]
  },
  {
    id: 4,
    question: "Qual algoritmo realiza mais comparações ao ordenar uma lista como a apresentada?",
    image: {
      name: null,
      url: "l5q2_a"
    },
    options: [
      { id: 1, text: "Quicksort", answerIndex: false },
      { id: 2, text: "Insertion Sort", answerIndex: true },
      { id: 3, text: "Merge Sort", answerIndex: false }
    ]
  },
  {
    id: 5,
    question: "É bem mais fácil encontrar informações quando elas estão ordenadas. Você já imaginou como seria difícil encontrar o significado de uma palavra em um dicionário se as palavras não estivessem em ordem alfabética?",
    isWhiteBackground: true,
    image: {
      name: null,
      url: "l5q3_a"
    },
    options: [
      { id: 1, text: "Próximo", isSkip: true },
    ]
  },
  {
    id: 6,
    question: "Por isso é importante a utilização da ordenação, pois facilita a localização de uma informação específica e também a identificação de informações duplicadas (ex: um nome que aparece mais de uma vez em uma lista).",
    isWhiteBackground: true,
    image: {
      name: null,
      url: "l5q3_b"
    },
    options: [
      { id: 1, text: "Próximo", isSkip: true },
    ]
  },
  {
    id: 7,
    question: "Os  computadores gastam muito tempo ordenando as coisas. Para fazer isso de forma mais rápida, eles devem ser programados. Deve-se especificar o passo a passo que será seguido para resolver o problema na ordenação.",
    isWhiteBackground: true,
    image: {
      name: null,
      url: "l5q3_c"
    },
    options: [
      { id: 1, text: "Próximo", isSkip: true },
    ]
  },
  {
    id: 8,
    question: "Vimos que a ordenação pode ser feita de várias formas. Essas formas de ordenar são chamadas de algoritmos de ordenação. Vimos, por exemplo, na fase 2 o algoritmo de ordenação por inserção (Insertion Sort), na fase 3 o Quicksort e na fase 4 o Merge Sort, que organiza os dados juntando pedaços menores já ordenados.",
    isWhiteBackground: true,
    image: {
      name: null,
      url: "l5q3_d"
    },
    options: [
      { id: 1, text: "Próximo", isSkip: true },
    ]
  },
  {
    id: 9,
    question: "A ordenação por inserção pode ser um dos métodos mais lentos, porém ele pode ser útil em situações especiais. Ele pode ser utilizado por exemplo, para colocar listas pequenas em ordem quando já estão quase ordenadas.",
    isWhiteBackground: true,
    image: {
      name: null,
      url: "l5q3_e"
    },
    options: [
      { id: 1, text: "Próximo", isSkip: true },
    ]
  },
  {
    id: 10,
    question: "Você lembra que no método de ordenação Quicksort a gente dividia o conjunto de números em grupos menores e, em seguida ficava repetindo o mesmo passo a passo até o conjunto de números ser ordenado? Esse conceito é chamado de recursão.",
    isWhiteBackground: true,
    image: {
      name: null,
      url: "l5q3_f"
    },
    options: [
      { id: 1, text: "Próximo", isSkip: true },
    ]
  },
  {
    id: 11,
    question: "Você notou que para ordenar com o Quicksort a lista era dividida em partes menores e se aplicava em cada parte o mesmo tipo de ordenação?",
    isWhiteBackground: true,
    image: {
      name: null,
      url: "l5q3_g"
    },
    options: [
      { id: 1, text: "Próximo", isSkip: true },
    ]
  },
  {
    id: 12,
    question: "Lembre que em cada ordenação se escolhia uma carta e se via quais as cartas menores e as maiores que ela, até que restasse apenas uma carta. Esse princípio de dividir o problema em partes até resolvê-lo por completo é chamado de Divisão e Conquista. Tanto o Quicksort quanto o Merge Sort usam essa ideia para ordenar de forma eficiente.",
    isWhiteBackground: true,
    image: {
      name: null,
      url: "l5q3_h"
    },
    options: [
      { id: 1, text: "Próximo", isSkip: true },
    ]
  },
  {
    id: 13,
    question: "Segundo estudos da Ciência da Computação, o Quicksort costuma ser mais rápido que o Insertion Sort em listas grandes e desordenadas, mas o Merge Sort também pode ser muito eficiente em vários casos.",
    image: {
      name: null,
      url: "l5q3_i"
    },
    options: [
      { id: 1, text: "Próximo", isSkip: true },
    ]
  },
  {
    id: 14,
    question: "Se você tiver que ordenar 1000 fichas completamente desordenadas de forma eficiente, qual algoritmo escolheria?",
    image: {
      name: null,
      url: "l5q3_j"
    },
    options: [
      { id: 1, text: "Insertion Sort", answerIndex: false },
      { id: 2, text: "Quicksort", answerIndex: true },
      { id: 3, text: "Escolheria aleatoriamente", answerIndex: false },
      { id: 4, text: "Merge Sort", answerIndex: false }
    ]
  },
  {
  id: 15,
  question: "Qual algoritmo funciona melhor quando a lista está quase ordenada?",
  image: {
    name: null,
    url: "l2q1_a" 
  },
  options: [
    { id: 1, text: "Insertion Sort", answerIndex: true },
    { id: 2, text: "Quicksort", answerIndex: false },
    { id: 3, text: "Merge Sort", answerIndex: false }
  ]
},
{
  id: 16,
  question: "Qual algoritmo é baseado em dividir a lista até que ela esteja em partes muito pequenas e depois intercalar?",
  image: {
    name: null,
    url: "l5q3_k" 
  },
  options: [
    { id: 1, text: "Quicksort", answerIndex: false },
    { id: 2, text: "Insertion Sort", answerIndex: false },
    { id: 3, text: "Merge Sort", answerIndex: true }
    
  ]
}

];

export default questions;
