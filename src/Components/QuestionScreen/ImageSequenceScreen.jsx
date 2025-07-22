import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight, faHouse } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { SequenceContainer, ArrowsWrapper } from './questionScreenStyled';

const ImageSequenceScreen = ({ imagens, onFinish }) => {
  const [index, setIndex] = useState(0);
  const navigate = useNavigate();

  return (
    <SequenceContainer>
      {/* Botão Home fixo */}
      <div className="home-button">
        <Link to="/LevelSelection">
          <FontAwesomeIcon icon={faHouse} size="2x" />
        </Link>
      </div>

      {/* Setas de navegação */}
      <ArrowsWrapper>
        <span
          onClick={() => {
            if (index === 0) {
              navigate(-1); // volta para a tela anterior (ex: introdução)
            } else {
              setIndex(index - 1);
            }
          }}
        >
          <FontAwesomeIcon icon={faAngleLeft} />
        </span>

        <span
          onClick={() => {
            if (index + 1 < imagens.length) {
              setIndex(index + 1);
            } else {
              onFinish();
            }
          }}
        >
          <FontAwesomeIcon icon={faAngleRight} />
        </span>
      </ArrowsWrapper>

      {/* Imagem da etapa atual */}
      <img src={imagens[index].img} alt={`Etapa ${index + 1}`} />

      {/* Texto explicativo */}
      <div className="description-text">{imagens[index].texto}</div>

      {/* Botão de avançar no final */}
      {index === imagens.length - 1 && (
        <button className="skip-button" onClick={onFinish}>
          Avançar
        </button>
      )}
    </SequenceContainer>
  );
};

export default ImageSequenceScreen;
