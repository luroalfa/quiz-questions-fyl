import React from "react";
import Questions from "../Assets/preguntas.js";
import childrenHappy from "../Assets/childrensHappys.svg";

const Body = () => {
  const [questionActual, setQuestionActual] = React.useState(0);
  const [puntuacion, setPuntuacion] = React.useState(0);
  const [isFinished, setIsFinished] = React.useState(false);
  // const [tiempoRestante, setTiempoRestante] = React.useState(60);
  const [areDisabled, setAreDisabled] = React.useState(false);

  function handleAnswerSummit(isCorrect, e) {
    //Add score
    if (isCorrect) setPuntuacion(puntuacion + 1);
    // Add change next questions
    if (questionActual === Questions.length - 1) {
      setIsFinished(true);
    } else {
      setQuestionActual(questionActual + 1);
      //Change times
      // setTiempoRestante(60);
    }
  }

  // React.useEffect(() => {
  //   const interval = setInterval(() => {
  //     if (tiempoRestante > 0) setTiempoRestante((prev) => prev - 1);
  //     if (tiempoRestante === 0) setAreDisabled(true);
  //   }, 1000);
  //   return () => clearInterval(interval);
  // }, [tiempoRestante]);

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
        {!areDisabled ? (
          <>
            {/* <div>Tiempo restante</div> */}
            {/* <div>{tiempoRestante} </div> */}
          </>
        ) : (
          <>
            <p>Se te acabo el tiempo</p>
            <button
              className="buttonContinue"
              onClick={() => {
                // setTiempoRestante(60);
                setAreDisabled(false);
                setQuestionActual(questionActual + 1);
              }}
            >
              Continuemos
            </button>
          </>
        )}
      </div>
      <div className="side-options">
        {Questions[questionActual].options.map((answer, index) => (
          <button
            disabled={areDisabled}
            key={index}
            onClick={(e) => handleAnswerSummit(answer.isCorrect, e)}
            className="button"
          >
            {answer.textAnswer}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Body;
