const questions = [
  {
    id: 1,
    question: "Observando as cartas acima, quais são menores que a carta número 4?",
    image: {
      name: null,
      url: "l3q1_a"
    },
    options: [
      { id: 1, text: "2, 3, 1", answerIndex: true },
      { id: 2, text: "4, 2, 7", answerIndex: false },
      { id: 3, text: "2, 3, 5", answerIndex: false },
      { id: 4, text: "6, 5, 7", answerIndex: false }
    ]
  },
  {
    id: 2,
    question: "As cartas menores ficam à esquerda e as maiores ficam à direita da carta número 4.",
    isWhiteBackground: true,
    image: {
      name: null,
      url: "l3q2_a"
    },
    options: [
      { id: 1, text: "Próximo", isSkip: true },
    ]
  },
  {
    id: 3,
    question: "Considerando o grupo à esquerda da carta 4, vamos sortear outra vez uma das cartas. Por exemplo: suponha que a carta sorteada seja a carta de número 2. ",
    isWhiteBackground: true,
    image: {
      name: null,
      url: "l3q2_b"
    },
    options: [
      { id: 1, text: "Próximo", isSkip: true },
    ]
  },
  {
    id: 4,
    question: "Observando as cartas acima, qual a carta que ficará à direita da carta 2?",
    image: {
      name: null,
      url: "l3q2_c"
    },
    options: [
      { id: 1, text: "3", answerIndex: true },
      { id: 2, text: "1", answerIndex: false },
      { id: 3, text: "Nenhuma das opções", answerIndex: false },
      { id: 4, text: "Qualquer uma das opções", answerIndex: false },

    ]
  },
  {
    id: 6,
    question: "Segundo o método de ordenação que estamos utilizando, os números menores ficam à esquerda e os números maiores ficam à direita. ",
    isWhiteBackground: true,
    image: {
      name: null,
      url: "l3q3_a"
    },
    options: [
      { id: 1, text: "Próximo", isSkip: true },

    ]
  },
  {
    id: 7,
    question: "Observe que os números que estão à esquerda do número 4 já estão ordenados. Agora só precisamos ordenar os números que estão à direita do número 4.",
    isWhiteBackground: true,
    image: {
      name: null,
      url: "l3q3_b"
    },
    options: [
      { id: 1, text: "Próximo", isSkip: true },

    ]
  },
  {
    id: 8,
    question: "Observando as cartas acima, qual carta ficará à esquerda da carta 5?",
    image: {
      name: null,
      url: "l3q3_c"
    },
    options: [
      { id: 1, text: "6", answerIndex: false },
      { id: 2, text: "7", answerIndex: false },
      { id: 3, text: "Nenhuma das opções", answerIndex: true },
      { id: 4, text: "Qualquer uma das opções", answerIndex: false },

    ]
  },
  {
    id: 9,
    question: "Segundo o método de ordenação que estamos utilizando, os números menores ficam à esquerda e os maiores ficam à direita. Portanto as cartas 6 e 7 ficaram à direita da carta 5 e nenhuma carta ficará à esquerda. ",
    isWhiteBackground: true,
    image: {
      name: null,
      url: "l3q4_a"
    },
    options: [
      { id: 1, text: "Próximo", isSkip: true },
    ]
  },
  {
    id: 10,
    question: "Considerando o grupo que restou, vamos sortear outra vez uma das cartas. Por exemplo: suponha que a carta sorteada seja a carta número 7. ",
    isWhiteBackground: true,
    image: {
      name: null,
      url: "l3q4_b"
    },
    options: [
      { id: 1, text: "Próximo", isSkip: true },
    ]
  },
  {
    id: 11,
    question: "Observando as cartas acima, qual carta ficaria à esquerda da carta 7?",
    image: {
      name: null,
      url: "l3q4_c"
    },
    options: [
      { id: 1, text: "6", answerIndex: true },
      { id: 2, text: "Nenhuma carta", answerIndex: false },
      { id: 3, text: "É preciso inserir uma outra carta", answerIndex: false },
      { id: 4, text: "A posição atual está correta", answerIndex: false },
    ]
  },
  {
    id: 12,
    question: "Observe agora que todas as cartas estão ordenadas",
    isWhiteBackground: true,
    image: {
      name: null,
      url: "l3q5_a"
    },
    options: [
      { id: 1, text: "Próximo", isSkip: true },
    ]
  },
{
  id: 13,
  question: "Veja o passo a passo da ordenação utilizando o método Quicksort.",
  isImageSequence: true,
  sequence: [
    { image: "video2-1.png", description: "Vamos ordenar essas cartas com o método Quicksort." },
    { image: "video2-2.png", description: "A primeira carta escolhida como pivô é a 5. Comparamos as demais cartas com o pivô 5." },
    { image: "video2-3.png", description: "A carta 6 é maior que 5, então ela permanece á direita da carta 5." },
    { image: "video2-4.png", description: "" },
    { image: "video2-5.png", description: "A carta 3 é menor que 5, então vai para a esquerda." },
    { image: "video2-6.png", description: "" },
    { image: "video2-7.png", description: "A carta 2 também é menor que 5 e vai para a esquerda." },
    { image: "video2-8.png", description: "" },
    { image: "video2-9.png", description: "A carta 4 é menor que 5, portanto também vai para a esquerda." },
    { image: "video2-10.png", description: "" },
    { image: "video2-11.png", description: "A carta 1 é menor que 5, e se junta ao grupo da esquerda." },
    { image: "video2-12.png", description: "" },
    { image: "video2-13.png", description: "A carta 7 é maior que 5, então fica no grupo da direita." },
    { image: "video2-14.png", description: "Agora temos dois grupos: um com as cartas menores que 5 e outro com as maiores." },
    { image: "video2-15.png", description: "Vamos escolher o grupo da esquerda para ordenar." },
    { image: "video2-16.png", description: "Vamos fazer o mesmo procedimento do lado esquerdo, no grupo da esquerda (3, 2, 4, 1), digamos que a carta escolhida como novo pivô foi a 2." },
    { image: "video2-17.png", description: "A carta 3 é maior que 2, então vai para a direita." },
    { image: "video2-18.png", description: "" },
    { image: "video2-19.png", description: "A carta 4 também é maior e fica na direita." },
    { image: "video2-20.png", description: "A carta 1 é menor que 2 e vai para a esquerda." },
    { image: "video2-21.png", description: "A carta 2 encontrou sua posição correta. Agora, sobram dois grupos ao lado dela. Vamos repetir o mesmo procedimento com cada um desses grupos." },
    { image: "video2-22.png", description: "Iniciamos pelo grupo da esquerda. Como a carta 1 está sozinha, ela já está ordenada." },
    { image: "video2-23.png", description: "Vamos para o grupo da direita. A carta 3 foi sorteada e, por ser menor que a 4, fica à esquerda." },
    { image: "video2-24.png", description: "A carta 3 já está ordenada. A carta 4 também, pois está sozinha no grupo." },
    { image: "video2-25.png", description: "As cartas à esquerda da 5 já estão ordenadas. Agora vamos ordenar o grupo à direita. Sorteamos a carta 7 para iniciar a comparação." },
    { image: "video2-26.png", description: "Comparamos a carta 7 com a 6. Como 7 não é menor que 6, ela permanece à direita." },
    { image: "video2-27.png", description: "A carta 7 já está no lugar certo, e a 6, por estar sozinha, também está ordenada." },
    { image: "video2-28.png", description: "Tudo certo! As cartas estão na ordem correta. Parabéns por aprender o método Quicksort!" }
  ],
  options: [
    {
      id: 1,
      text: "Já entendi!",
      isSkip: true
    }
  ]
}

];

export default questions;
