import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './UserSetup.module.css';

const UserSetup = () => {
  const [name, setName] = useState('');
  const navigate = useNavigate();

  const handleStart = () => {
    if (name.trim() !== '') {
      localStorage.setItem('ordenacao_user_id', name.trim());
      navigate('/LevelSelection');
    } else {
      alert('Por favor, digite seu nome ou identificador.');
    }
  };

  const handleSkip = () => {
    localStorage.setItem('ordenacao_user_id', 'user-local');
    navigate('/LevelSelection');
  };

  return (
    <div className={styles.page}>
      <div className={styles.card}>
        <h2>Digite seu e-mail ou código de usuário ou apenas seu nome:</h2>
        <input
          type="text"
          placeholder="Ex: maria.silva, 123abc, ou apenas Maria"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={styles.input}
        />
        <button onClick={handleStart} className={styles.button}>
          Enviar
        </button>
        <p onClick={handleSkip} className={styles.skip}>
          Entrar sem meus dados
        </p>
      </div>
    </div>
  );
};

export default UserSetup;
