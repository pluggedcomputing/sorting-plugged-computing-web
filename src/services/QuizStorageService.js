const STORAGE_KEY = 'ordenacao_respostas';

// Salva a tentativa feita (true ou false) para a questão no nível
export const saveAnswer = (level, questionId, isCorrect) => {
  const stored = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};

  if (!stored[level]) stored[level] = {};
  if (!stored[level][questionId]) stored[level][questionId] = [];

  stored[level][questionId].push(isCorrect);

  localStorage.setItem(STORAGE_KEY, JSON.stringify(stored));
};

// Recupera todas as tentativas de um nível
export const getAnswersByLevel = (level) => {
  const stored = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
  return stored[level] || {};
};

// Conta o número total de tentativas no nível
export const countTotalAttempts = (level) => {
  const answers = getAnswersByLevel(level);
  return Object.values(answers).reduce((sum, arr) => sum + arr.length, 0);
};

// Conta o número de questões respondidas no nível
export const countTotalQuestions = (level) => {
  const answers = getAnswersByLevel(level);
  return Object.keys(answers).length;
};

// Score com base no total de erros (mesma lógica usada no Binários)
export const getScore = (level, correctAnswersMap) => {
  const answers = getAnswersByLevel(level);
  const totalQuestions = Object.keys(correctAnswersMap).length;

  if (totalQuestions === 0) return 0;

  let totalAttempts = 0;

  for (const questionId of Object.keys(correctAnswersMap)) {
    const attempts = answers[questionId] || [];
    totalAttempts += attempts.length;
  }

  const totalErrors = totalAttempts - totalQuestions;
  const errorRatio = totalErrors / totalAttempts;

  const stars = Math.max(1, Math.round((1 - errorRatio) * 5));
  return stars / 5; // valor entre 0 e 1
};

// Limpa os dados de um único nível
export const clearLevelAnswers = (level) => {
  const stored = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
  if (stored[level]) {
    delete stored[level];
    localStorage.setItem(STORAGE_KEY, JSON.stringify(stored));
  }
};

// Limpa todos os dados salvos
export const clearAnswers = () => {
  localStorage.removeItem(STORAGE_KEY);
};
