import { useNavigate, Link } from "react-router-dom";
import { Container } from "./congratulationsStyled";
import congratulations from '../../assets/images/congratulations/win_level.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faArrowRightRotate, faArrowRight, faXmark } from '@fortawesome/free-solid-svg-icons';
import { clearLevelAnswers } from "../../services/QuizStorageService";

const Congratulations = ({ level, levelReload, score }) => {
  const navigate = useNavigate();

  const houseIcon = <FontAwesomeIcon icon={faHouse} size="2x" />;
  const reloadIcon = <FontAwesomeIcon icon={faArrowRightRotate} size="2x" />;
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
          
          <a className="nav-btn" onClick={(e) => { e.preventDefault(); handleRetry(); }} style={{ cursor: 'pointer' }}>
                  <div className="containerButton">
                     {reloadIcon}
             </div>
          </a>

          <Link to={level === 4 ? `/LevelSelection` : `/level${level + 1}-1`}>
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
