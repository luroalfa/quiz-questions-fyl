import React from "react";
import Questions from "../Assets/preguntas.js";

const Body = () => {
  const [questionActual, setQuestionActual] = React.useState(0);
  const [puntuacion, setPuntuacion] = React.useState(0);
  const [isFinished, setIsFinished] = React.useState(false);

  const handleAnswerSummit = (isCorrect, e) => {
    if (isCorrect) setPuntuacion(puntuacion + 1);
    e.target.classList.add(isCorrect ? "correct" : "incorrect");
    setTimeout(() => {
      if (questionActual === Questions.length - 1) {
        setIsFinished(true);
      } else {
        //Cambiamos a la pregunta actual a la otra
        setQuestionActual(questionActual + 1);
      }
    }, 100);
  };

  if (isFinished)
    return (
      <div className="bodyQuestionsFinished">
        <div>Juego terminado</div>
        <div>
          Su puntuacion fue de: {`${puntuacion} de ${Questions.length}`}
        </div>
        <div>
          {puntuacion === Questions.length
            ? "Obtuviste un 100 enseñale a tu mami."
            : ""}
        </div>
        <button onClick={() => (window.location.href = "/")}>
          Volver a Jugar
        </button>
      </div>
    );
  return (
    <div className="bodyQuestions">
      <div className="side-questions">
        <div className="numero-pregunta">
          Preguta {questionActual + 1} de {Questions.length}
        </div>
        <div className="titulo-pregunta">
          {Questions[questionActual].titulo}
        </div>
      </div>
      <div className="side-options">
        {Questions[questionActual].opciones.map((answer, index) => (
          <button
            key={index}
            onClick={(e) => handleAnswerSummit(answer.isCorrect, e)}
            className="button-ans"
          >
            {answer.textAnswer}{" "}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Body;
