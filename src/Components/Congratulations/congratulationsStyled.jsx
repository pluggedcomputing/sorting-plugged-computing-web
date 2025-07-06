import styled from "styled-components";

export const Container = styled.div`
  & .content {
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
  }

  & div img {
    width: 40%;
    margin: 1rem;
  }

  & .text-box {
    margin: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 10px;
  }

  & h3 {
    margin-top: 4rem !important;
  }

  & h2, h3 {
    color: #07377A;
    margin: 10px;
  }

  & span {
    color: #07377A;
    font-size: 1.4rem;
    margin: 0;
    padding: 0;
  }

  & a {
    text-decoration: none;
    color: #fff;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

.containerButton {
  background-color: #07377A;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color 0.3s ease;
}

.containerButton:hover {
  background-color: #0a4caa; /* Azul um pouco mais claro */
}

  .nav-buttons {
    width: 55%;
    display: flex;
    justify-content: space-around;
  }

  .close-container {
    position: absolute;
    top: 10px;
    right: 15px;
  }

  .close-button {
    color: #07377A;
  }

  .stars-feedback {
    margin-top: 1rem;
    text-align: center;
  }

  .stars {
    font-size: 3.4rem;
    color: #FFD700;
    text-shadow:
      -0.5px -0.5px 1px #444,
      0.5px -0.5px 1px #444,
      -0.5px  0.5px 1px #444,
      0.5px  0.5px 1px #444;
  }

  .feedback {
    margin-top: 0.6rem;
    font-size: 1.2rem;
    color: #07377A;
  }

@media (max-height: 800px) {
  & div img {
    width: 38%;
    max-width: 160px;
    margin: 0.8rem 0;
  }

  h3, h2 {
    font-size: 1.35rem;
    margin: 0.5rem 0;
  }

  span, .feedback {
    font-size: 1.2rem;
    margin: 0.3rem 0;
  }

  .containerButton {
  width: 50px;
  height: 50px;
  }

  .stars {
    font-size: 2.9rem;
  }

  .nav-buttons {
    padding: 10px 0 0 0;
    gap: 0.8rem;
  }

  .nav-btn {
    margin: 0 10px;
  }
}

@media only screen and (max-width: 768px) {
  & div img {
    width: 65vw;
    max-width: 280px;
    min-width: 130px;
  }

  h2, h3 {
    font-size: 1.6rem;
  }

  .stars {
    font-size: 2.4rem;
  }

  .containerButton {
  width: 50px;
  height: 50px;
  }

  .feedback {
    font-size: 1.3rem;
    padding: 0 8px;
    margin: 1.2rem 0 1.4rem 0;
    word-break: break-word;
  }

  .nav-buttons {
    gap: 1.5rem;
    padding: 18px 0 0 0;
  }

  .nav-btn {
    margin: 0 24px;
  }
}

@media only screen and (max-width: 527px) {
  & div img {
    width: 80%;
  }

  span {
    font-size: 1.3rem;
  }

  h2, h3 {
    font-size: 1.3rem;
  }

  .stars {
    font-size: 2.8rem;
  }

  .containerButton {
  width: 45px;
  height: 45px;
  }

  .feedback {
    font-size: 1.2rem;
    padding: 0 6px;
    margin: 0.8rem 0 1.4rem 0;
    word-break: break-word;
  }

  .nav-buttons {
    gap: 0.8rem;
    justify-content: center;
    padding: 12px 0 0 0;
  }
}

@media (max-height: 700px) {
  & div img {
    width: 35vw;
    max-width: 120px;
    margin: 0.6rem 0 0.8rem 0;
  }

  h3, h2 {
    font-size: 1.25rem;
    margin: 0.5rem 0;
  }

  span, .feedback {
    font-size: 1.1rem;
    margin: 0.3rem 0;
  }

  .stars {
    font-size: 2.6rem;
  }

  .containerButton {
  width: 45px;
  height: 45px;
  }

  .nav-buttons {
    padding: 8px 0 0 0;
    gap: 0.6rem;
  }

  .nav-btn {
    margin: 0 6px;
  }
}
`  