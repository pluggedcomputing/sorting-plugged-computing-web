// services/ApiService.js
const API_BASE_URL = 'https://activities.a4s.dev.br/api';

export const saveUserResponse = async (responses, userId) => {
  const body = responses.flatMap(([level, questions]) =>
    Object.entries(questions).map(([questionId, isCorrect]) => ({
      id: '', // ou gere um UUID se o backend exigir
      userId: userId,
      level: parseInt(level),
      question: parseInt(questionId),
      answer: isCorrect
    }))
  );

  try {
    const response = await fetch(`${API_BASE_URL}/response`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body)
    });

    if (!response.ok) {
      throw new Error('Erro ao enviar respostas');
    }

    return await response.json();
  } catch (err) {
    console.error('Erro ao enviar respostas:', err);
    return null;
  }
};
