const questions = [
  {
    id: 1,
    question: "Observando as cartas, onde você colocaria a carta 2?",
    image: {
      name: null,
      url: "l2q1_a"
    },
    options: [
      { id: 1, text: "A", answerIndex: false },
      { id: 2, text: "B", answerIndex: true },
      { id: 3, text: "C", answerIndex: false },
      { id: 4, text: "D", answerIndex: false },
      { id: 5, text: "E", answerIndex: false }
    ]
  },
  {
    id: 2,
    question: "Observando as cartas, onde você colocaria a carta 6?",
    image: {
      name: null,
      url: "l2q2_a"
    },
    options: [
      { id: 1, text: "A", answerIndex: false },
      { id: 2, text: "B", answerIndex: false },
      { id: 3, text: "C", answerIndex: false },
      { id: 4, text: "D", answerIndex: true },
      { id: 5, text: "E", answerIndex: false }
    ]
  },
{
  id: 3,
  question: "Veja o passo a passo da ordenação inserindo as cartas no lugar correto.",
  isImageSequence: true,
  sequence: [
    {
      image: "video1-1.png",
      description: "Vamos ordenar essas cartas usando o método da ordenação por inserção."
    },
    {
      image: "video1-2.png",
      description: "A carta revelada é a 3. Vamos encontrar sua posição correta na sequência."
    },
    {
      image: "video1-3.png",
      description: "3 é menor que 9. Movemos a carta 9 para a direita para abrir espaço."
    },
    {
      image: "video1-4.png",
      description: "3 também é menor que 4. Movemos a carta 4 para a direita."
    },
    {
      image: "video1-5.png",
      description: "3 é maior que 1. A carta 1 permanece, e inserimos a 3 à sua direita."
    },
    {
      image: "video1-6.png",
      description: "A carta revelada agora é a 2. Vamos compará-la com as cartas à esquerda."
    },
    {
      image: "video1-7.png",
      description: "2 é menor que 9. Movemos a carta 9 para a direita."
    },
    {
      image: "video1-8.png",
      description: "2 também é menor que 4. Movemos a carta 4 para a direita."
    },
    {
      image: "video1-9.png",
      description: "2 é menor que 3. Movemos a carta 3 para a direita."
    },
    {
      image: "video1-10.png",
      description: "2 é maior que 1. Inserimos a carta 2 à direita da carta 1."
    },
    {
      image: "video1-11.png",
      description: "A carta revelada é a 6. Vamos encontrar onde ela se encaixa."
    },
    {
      image: "video1-12.png",
      description: "6 é menor que 9, então movemos a carta 9. Como 6 é maior que 4, ela será inserida logo após o 4."
    },
    {
      image: "video1-13.png",
      description: "Muito bem! Todas as cartas estão agora organizadas em ordem crescente."
    }
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
