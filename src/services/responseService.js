export const saveResponse = async (responseData) => {
  try {
    const response = await fetch('https://activities.a4s.dev.br/api/response', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(responseData)
    });

    if (!response.ok) {
      throw new Error('Erro ao enviar resposta');
    }

    return await response.json();
  } catch (error) {
    console.error('Erro ao salvar resposta:', error);
    return null;
  }
};
