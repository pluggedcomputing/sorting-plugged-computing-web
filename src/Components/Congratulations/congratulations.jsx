import { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Container } from "./congratulationsStyled";
import congratulations from '../../assets/images/congratulations/win_level.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faArrowRightRotate, faArrowRight, faXmark } from '@fortawesome/free-solid-svg-icons';
import { clearLevelAnswers } from "../../services/QuizStorageService";

const Congratulations = ({ level, levelReload, score }) => {
  const navigate = useNavigate();

  // Envia as respostas salvas localmente para o servidor
  useEffect(() => {
    const STORAGE_KEY = 'ordenacao_respostas';
    const savedData = localStorage.getItem(STORAGE_KEY);

    if (!savedData) return;

    const parsed = JSON.parse(savedData);
    const userId = localStorage.getItem('userId') || 'user-local';

    const respostas = [];

    for (const [nivel, questoes] of Object.entries(parsed)) {
      for (const [questaoId, tentativas] of Object.entries(questoes)) {
        const acertou = tentativas.includes(true);
        respostas.push({
          id: '',
          userId,
          level: parseInt(nivel),
          question: parseInt(questaoId),
          answer: acertou
        });
      }
    }

    if (respostas.length > 0) {
      fetch('https://activities.a4s.dev.br/api/response', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(respostas)
      })
        .then(res => {
          if (!res.ok) throw new Error('Erro ao enviar respostas');
          return res.json();
        })
        .then(res => console.log('Respostas salvas com sucesso:', res))
        .catch(err => console.error('Erro ao salvar respostas:', err));
    }
  }, []);

  const houseIcon = <FontAwesomeIcon icon={faHouse} size="2x" />;
  const reloadIcon = <FontAwesomeIcon icon={faArrowRightRotate} size="2x" color="white" />;
  const nextLevelIcon = <FontAwesomeIcon icon={faArrowRight} size="2x" />;
  const closeIcon = <FontAwesomeIcon icon={faXmark} size="2x" className="close-button" />;

  const getStars = (score) => {
    const fullStars = Math.round(score * 5);
    return '★'.repeat(fullStars) + '☆'.repeat(5 - fullStars);
  };

  const getFeedbackMessage = (score) => {
    const starsCount = Math.round(score * 5);
    if (starsCount === 5) return 'Pontuação máxima alcançada! Excelente trabalho!';
    if (starsCount === 4) return 'Muito bem! Quase lá!';
    if (starsCount === 3) return 'Continue praticando!';
    if (starsCount === 2) return 'Ainda dá para melhorar! Não desista!';
    return 'Continue tentando! Cada erro é uma oportunidade de aprendizado!';
  };

  const handleRetry = () => {
    clearLevelAnswers(level);
    navigate(levelReload);
  };

  return (
    <Container>
      <div className="close-container">
        <Link to={"/levelSelection"}>
          {closeIcon}
        </Link>
      </div>

      <div className="content">
        <h3><strong>FASE {level}</strong></h3>
        <img src={congratulations} alt="Cover" />

        <div className="text-box">
          <h2><strong>PARABÉNS</strong></h2>
          <span>Você concluiu a FASE {level} do Computação Plugada Ordenação!</span>

          {score !== undefined && (
            <div className="stars-feedback">
              <div className="stars">{getStars(score)}</div>
              <div className="feedback">{getFeedbackMessage(score)}</div>
            </div>
          )}
        </div>

        <div className="nav-buttons">
          <Link to={"/levelSelection"}>
            <div className="nav-btn">
              <div className="containerButton">
                {houseIcon}
              </div>
            </div>
          </Link>

          <button
            className="nav-btn"
            onClick={handleRetry}
            aria-label="Reiniciar fase"
            style={{ cursor: 'pointer', background: 'none', border: 'none', padding: 0 }}
          >
            <div className="containerButton">
              {reloadIcon}
            </div>
          </button>

          <Link to={level === 5 ? `/LevelSelection` : `/level${level + 1}-1`}>
            <div className="nav-btn">
              <div className="containerButton">
                {nextLevelIcon}
              </div>
            </div>
          </Link>
        </div>
      </div>
    </Container>
  );
};

export default Congratulations;
