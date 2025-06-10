import styled from 'styled-components';

export const AppWrapper = styled.div`
  min-height: 100vh;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const QuizWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 20px;
  max-width: 600px;

  .toast {
    position: absolute;
    top: 110px;
  }

  h2 {
    font-size: 1rem;
    margin-bottom: 20px;
    color: #07377A;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  li {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    cursor: pointer;
    background-color: #07377A;
    color: white;
    border-radius: 7px;
    width: 450px;
    height: 50px;
    margin: 1.5rem 0;
    box-shadow: 0 8px 5px #07377a3f;
    font-size: 1rem;
    font-weight: bold;
    text-align: center;
  }

  & .wrong {
    background-color: red;
  }

  img {
    width: 65%;
    max-width: 500px;
    margin-bottom: 20px;
  }

  video {
    max-height: 700px;
    margin: 20px 0;
  }

  .feedback-toast {
    position: absolute;
    top: 20px;
    right: 20px;
    background-color: #FFF9C4;
    padding: 8px 12px;
    border-radius: 8px;
    font-weight: 500;
    font-size: 18px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    width: 220px;
    text-align: center;
    min-height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
  }

  .feedback-toast.success {
    background-color: #E6FFCC;
    color: green;
  }

  .feedback-toast.error {
    background-color: #FFE6E6;
    color: red;
  }

  .home-button {
    position: absolute;
    top: 20px;
    right: 40px;
  }

  .home-button a {
    background-color: #F2C824;
    padding: 12px;
    border-radius: 50%;
    color: #07377A;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  }

  @media (max-width: 770px) and (min-width: 340px) {
    height: 100%;

    li {
      width: 350px;
      font-size: 1rem;
    }

    video {
      width: 100%;
      max-height: 380px;
      margin: 20px 0;
    }
  }

  @media (max-width: 900px) and (min-width: 770px) {
    width: 550px;

    & .description {
      width: 250px;
      margin: 0;
    }

    & p {
      font-size: 2rem;
    }
  }

  @media (max-width: 1200px) and (min-width: 900px) {
    width: 600px;
  }

  @media (max-width: 768px) {
    video {
      margin: 20px 0;
    }
  }

  @media (max-width: 527px) {
    video {
      margin: 20px 0;
    }
  }

  @media (max-height: 800px) {
    video {
      margin: 20px 0;
    }
  }

  @media (max-height: 700px) {
    video {
      margin: 20px 0;
    }
  }
`;

export const BackArrow = styled.div`
  position: absolute;
  top: 50%;
  left: 20px;
  transform: translateY(-50%);
  z-index: 100;

  a {
    color: #500D7C;
    text-decoration: none;
  }
`;
