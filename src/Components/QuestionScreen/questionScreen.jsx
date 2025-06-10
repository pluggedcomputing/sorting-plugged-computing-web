import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { saveAnswer, clearLevelAnswers, getScore } from '../../services/QuizStorageService';

import { AppWrapper, QuizWrapper, BackArrow } from './questionScreenStyled';
import Congratulations from '../Congratulations/congratulations';

const Quiz = (props) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(null);
  const [feedbackText, setFeedbackText] = useState('');

  const questions = props.questions;
  const level = props.level;

  useEffect(() => {
    clearLevelAnswers(level); 
  }, [level]);

  const imagens = {
    l1q1_a: require('../../assets/images/levels/level1/level1_3.png'),
    l2q1_a: require('../../assets/images/levels/level2/level2_4.png'),
    l2q2_a: require('../../assets/images/levels/level2/level2_5.png'),
    l3q1_a: require('../../assets/images/levels/level3/level3_4.png'),
    l3q2_a: require('../../assets/images/levels/level3/level3_5.png'),
    l3q2_b: require('../../assets/images/levels/level3/level3_6.png'),
    l3q2_c: require('../../assets/images/levels/level3/level3_7.png'),
    l3q3_a: require('../../assets/images/levels/level3/level3_8.png'),
    l3q3_b: require('../../assets/images/levels/level3/level3_9.png'),
    l3q3_c: require('../../assets/images/levels/level3/level3_10.png'),
    l3q4_a: require('../../assets/images/levels/level3/level3_11.png'),
    l3q4_b: require('../../assets/images/levels/level3/level3_12.png'),
    l3q4_c: require('../../assets/images/levels/level3/level3_13.png'),
    l3q5_a: require('../../assets/images/levels/level3/level3_14.png'),
    l4q1_a: require('../../assets/images/levels/level4/level4_2.png'),
    l4q2_a: require('../../assets/images/levels/level4/level4_3.png'),
    l4q3_a: require('../../assets/images/levels/level4/level4_4.png'),
    l4q3_b: require('../../assets/images/levels/level4/level4_5.png'),
    l4q3_c: require('../../assets/images/levels/level4/level4_6.png'),
    l4q3_d: require('../../assets/images/levels/level4/level4_7.png'),
    l4q3_e: require('../../assets/images/levels/level4/level4_9.png'),
    l4q3_f: require('../../assets/images/levels/level4/level4_10.png'),
    l4q3_g: require('../../assets/images/levels/level4/level4_11.png'),
    l4q3_h: require('../../assets/images/levels/level4/level4_12.png'),
    l4q3_i: require('../../assets/images/levels/level4/level4_13.png'),
    l4q3_j: require('../../assets/images/levels/level4/level4_14.png'),
  };

  const videos = {
    l2_mp4: require('../../assets/videos/level2.mp4'),
    l3_mp4: require('../../assets/videos/level3.mp4'),
    l4_mp4: require('../../assets/videos/level4.mp4'),
  };

  const getImagens = type => imagens[type] || null;
  const getVideos = type => videos[type] || null;

  const lastIntroScreenByLevel = {
    1: 2,
    2: 3,
    3: 3,
    4: 1,
  };

  const lastIntroScreen = lastIntroScreenByLevel[level] || 1;

const handleAnswerClick = (answerIndex) => {
  const currentQuestion = questions[currentQuestionIndex];
  const selectedOption = currentQuestion.options?.[answerIndex];

  if (selectedOption?.isSkip) {
    setCurrentQuestionIndex(currentQuestionIndex + 1);
    return;
  }

  if (selectedOption && isAnswerCorrect === null) {
    const isCorrect = selectedOption.answerIndex;
    const questionId = currentQuestion.id;
    saveAnswer(level, questionId, isCorrect);

    setSelectedAnswerIndex(answerIndex);
    setIsAnswerCorrect(isCorrect);
    setFeedbackText(isCorrect ? '✅ Parabéns!' : '❌ Tente outra vez!');

    setTimeout(() => {
      if (isCorrect) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      }
      setSelectedAnswerIndex(null);
      setIsAnswerCorrect(null);
      setFeedbackText('');
    }, 2000);
  }
};

  const showImage = url => url ? <img src={getImagens(url)} alt="" /> : null;
  const showVideo = url => <video controls src={getVideos(url)} width="560" height="315" />;

  const renderQuestion = () => (
    <QuizWrapper>
      <Helmet htmlAttributes={{ lang: 'pt-Br' }}>
        <title>{`Fase ${level}`}</title>
      </Helmet>

      <div className="home-button">
        <Link to="/LevelSelection">
          <FontAwesomeIcon icon={faHouse} size="2x" />
        </Link>
      </div>

    {!questions[currentQuestionIndex].isVideo && (
      <BackArrow>
        <Link to={`/level${level}-${lastIntroScreen}`}>
          <FontAwesomeIcon icon={faAngleLeft} size="3x" />
        </Link>
      </BackArrow>
    )}

      {questions[currentQuestionIndex].isVideo
        ? showVideo(questions[currentQuestionIndex].video.url)
        : showImage(questions[currentQuestionIndex].image.url)}

      <h2>{questions[currentQuestionIndex].question}</h2>

      {feedbackText !== '' && (
        <div style={{
          position: 'absolute',
          top: 20,
          right: 20,
          backgroundColor: 'white',
          padding: '8px 12px',
          borderRadius: '8px',
          fontWeight: '500',
          fontSize: '18px',
          color: isAnswerCorrect ? 'green' : 'red',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
          width: '220px',
          textAlign: 'center',
          minHeight: '40px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          {feedbackText}
        </div>
      )}

      {feedbackText !== '' && (
        <div className={`feedback-toast ${isAnswerCorrect ? 'success' : 'error'}`}>
          {feedbackText}
        </div>
      )}

      <ul>
        {questions[currentQuestionIndex].options.map(({ id, text }, index) => (
          <li
            key={id}
            onClick={() => handleAnswerClick(index)}
            style={{
              backgroundColor:
                selectedAnswerIndex !== null &&
                selectedAnswerIndex === index &&
                isAnswerCorrect === false
                  ? "red"
                  : selectedAnswerIndex !== null &&
                    selectedAnswerIndex === index &&
                    isAnswerCorrect === true
                    ? "green"
                    : "#07377A"
            }}
          >
            {text}
          </li>
        ))}
      </ul>
    </QuizWrapper>
  );

  if (currentQuestionIndex >= questions.length) {
    const correctAnswersMap = {};
    questions.forEach(q => {
      const correctOption = q.options.find(opt => opt.answerIndex === true);
      if (correctOption) {
        correctAnswersMap[q.id] = true;
      }
    });

    const score = getScore(level, correctAnswersMap);

    return (
      <AppWrapper style={{ backgroundColor: "#F2C824" }}>
        <Congratulations
          level={level}
          levelReload={`/level${level}-1`}
          score={score}
        />
      </AppWrapper>
    );
  }

  return (
    <AppWrapper style={
      questions[currentQuestionIndex].isWhiteBackground
        ? { backgroundColor: "white" }
        : { backgroundColor: "#F2C824" }
    }>
      {renderQuestion()}
    </AppWrapper>
  );
};

export default Quiz;
