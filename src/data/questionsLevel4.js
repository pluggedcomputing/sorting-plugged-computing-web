const questions = [
  {
    id: 1,
    question: "Veja o passo a passo da ordenação usando o Merge Sort.",
    isImageSequence: true,
    sequence: [
      {
        image: "video3-1.png",
        description: "Merge Sort usa a estratégia de Dividir e Conquistar: primeiro separamos em partes menores para depois juntar em ordem."
      },
      {
        image: "video3-2.png",
        description: "Começamos com as cartas desorganizadas. Este será o conjunto a ser ordenado."
      },
      {
        image: "video3-3.png",
        description: "Primeiro, dividimos as cartas em dois grupos: à esquerda (5, 6, 3) e à direita (4, 1, 7)."
      },
      {
        image: "video3-4.png",
        description: "Mantemos os dois grupos separados. Agora vamos preparar para unir e ordenar as cartas."
      },
      {
        image: "video3-5.png",
        description: "Começamos a ordenar unindo as primeiras cartas de cada grupo. No grupo de cima, 5 e 6 ficam juntos em ordem: [5, 6], enquanto o 3 permanece sozinho. No grupo de baixo, 4 e 1 são colocados em ordem: [1, 4], e o 7 continua sozinho."
      },
      {
        image: "video3-6.png",
        description: "Agora unimos 5, 6 com 3 e organizamos em ordem crescente, formando [3, 5, 6]. Depois, juntamos 1, 4 com o 7 e também colocamos em ordem, resultando em [1, 4, 7]."
      },
      {
        image: "video3-7.png",
        description: "Por fim, unimos os dois grupos já ordenados, [3, 5, 6] e [1, 4, 7], e durante essa união reorganizamos tudo para formar a sequência final em ordem crescente."
      },
      {
        image: "video3-8.png",
        description: "Pronto! Todas as cartas foram ordenadas com sucesso utilizando o Merge Sort."
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
    question: "Agora que você já conhece o Merge Sort, está pronto para os próximos desafios!",
    isWhiteBackground: true,
    image: {
      name: null,
      url: "l4q4_a"
    },
    options: [
      { id: 1, text: "Próximo", isSkip: true },
    ]
  },
  {
    id: 3,
    question: "O Merge Sort utiliza qual estratégia principal?",
    image: {
      name: null,
      url: "l4q1_a"
    },
    options: [
      { id: 1, text: "Dividir e conquistar", answerIndex: true },
      { id: 2, text: "Força bruta", answerIndex: false },
      { id: 3, text: "Busca linear", answerIndex: false },
      { id: 4, text: "Ordenação aleatória", answerIndex: false },
    ]
  },
  {
    id: 4,
    question: "Durante a etapa de intercalação no Merge Sort, o que acontece com os elementos?",
    image: {
      name: null,
      url: "l4q2_a"
    },
    options: [
      { id: 1, text: "Os elementos são embaralhados novamente", answerIndex: false },
      { id: 2, text: "Os grupos são unidos em ordem", answerIndex: true },
      { id: 3, text: "As cartas são descartadas", answerIndex: false },
      { id: 4, text: "A lista é ignorada", answerIndex: false },
    ]
  },
  {
    id: 5,
    question: "Mesmo quando a lista está totalmente fora de ordem, o Merge Sort...",
    image: {
      name: null,
      url: "l4q3_a"
    },
    options: [
      { id: 1, text: "Pode falhar dependendo da entrada", answerIndex: false },
      { id: 2, text: "Precisa de ajuda manual", answerIndex: false },
      { id: 3, text: "Sempre entrega a lista ordenada", answerIndex: true },
      { id: 4, text: "Funciona apenas com números pequenos", answerIndex: false },
    ]
  }

];

export default questions;
