import React from "react";
import Questions from "../Assets/preguntas.js";
import childrenHappy from "../Assets/childrensHappys.svg";

const Body = () => {
  const [questionActual, setQuestionActual] = React.useState(0);
  const [puntuacion, setPuntuacion] = React.useState(0);
  const [isFinished, setIsFinished] = React.useState(false);

  function handleAnswerSummit(isCorrect, e) {
    //Add score
    if (isCorrect) setPuntuacion(puntuacion + 1);
    //Add questions styles
    e.target.classList.add(isCorrect ? "correct" : "incorrect");
    // Add change next questions
    if (questionActual === Questions.length - 1) {
      setIsFinished(true);
    } else {
      setQuestionActual(questionActual + 1);
    }
  }

  // const handleAnswerSummit = (isCorrect, e) => {
  //   if (isCorrect) setPuntuacion(puntuacion + 1);
  //   e.target.classList.add(isCorrect ? "correct" : "incorrect");
  //   setTimeout(() => {
  //     if (questionActual === Questions.length - 1) {
  //       setIsFinished(true);
  //     } else {
  //       //Cambiamos a la pregunta actual a la otra
  //       setQuestionActual(questionActual + 1);
  //     }
  //   }, 100);
  // };

  if (isFinished) {
    return (
      <div className="bodyQuestionsFinished">
        <div>Juego terminado</div>
        <p>Su puntuacion fue de:</p>
        {`${puntuacion} de ${Questions.length}`}
        <div>
          {`Obtuviste una nota de ${(
            (puntuacion / Questions.length) *
            100
          ).toFixed()}`}
        </div>
        <button onClick={() => (window.location.href = "/")}>
          Volver a Jugar
        </button>
        {(puntuacion / Questions.length) * 100 === 100 && (
          <img src={childrenHappy} alt="Niños celebrando" />
        )}
      </div>
    );
  }

  return (
    <div className="bodyQuestions">
      <div className="side-questions">
        <div className="numero-pregunta">
          Preguta {questionActual + 1} de {Questions.length}
        </div>
        <div className="titulo-pregunta">{Questions[questionActual].title}</div>
      </div>
      <div className="side-options">
        {Questions[questionActual].options.map((answer, index) => (
          <button
            key={index}
            onClick={(e) => handleAnswerSummit(answer.isCorrect, e)}
            // onClick={(e) => handleAnswerSummit(answer.isCorrect, e)}
          >
            {answer.textAnswer}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Body;
