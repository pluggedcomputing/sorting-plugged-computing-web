const questions = [
  {
    id: 1,
    question: "O Merge Sort utiliza qual estratégia principal?",
    image: {
      name: null,
      url: "l5q1_a"
    },
    options: [
      { id: 1, text: "Dividir e conquistar", answerIndex: true },
      { id: 2, text: "Força bruta", answerIndex: false },
      { id: 3, text: "Busca linear", answerIndex: false },
      { id: 4, text: "Ordenação aleatória", answerIndex: false },
    ]
  },
  {
    id: 2,
    question: "O que acontece na etapa de intercalação do Merge Sort?",
    image: {
      name: null,
      url: "l5q2_a"
    },
    options: [
      { id: 1, text: "Os elementos são embaralhados novamente", answerIndex: false },
      { id: 2, text: "Os grupos são unidos em ordem", answerIndex: true },
      { id: 3, text: "As cartas são descartadas", answerIndex: false },
      { id: 4, text: "A lista é ignorada", answerIndex: false },
    ]
  },
  {
    id: 3,
    question: "Mesmo quando a lista está totalmente fora de ordem, o Merge Sort...",
    image: {
      name: null,
      url: "l5q3_a"
    },
    options: [
      { id: 1, text: "Pode falhar dependendo da entrada", answerIndex: false },
      { id: 2, text: "Precisa de ajuda manual", answerIndex: false },
      { id: 3, text: "Sempre entrega a lista ordenada", answerIndex: true },
      { id: 4, text: "Funciona apenas com números pequenos", answerIndex: false },
    ]
  },
  {
    id: 4,
    question: "Agora que você já conhece o Merge Sort, está pronto para os próximos desafios!",
    isWhiteBackground: true,
    image: {
      name: null,
      url: "l5q4_a"
    },
    options: [
      { id: 1, text: "Próximo", isSkip: true },
    ]
  }

];

export default questions;
