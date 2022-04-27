const preguntas = [
  {
    title: '¿En esta etapa se inicia desde el nacimiento hasta los 12 años?',
    options: [
      { textAnswer: "Adolecencia.", isCorrect: false },
      { textAnswer: "Madurez", isCorrect: false },
      { textAnswer: "Infancia", isCorrect: true },
      { textAnswer: "Juventud.", isCorrect: false },
      { textAnswer: "Vejez.", isCorrect: false },
    ]
  },
  {
    title: '¿Esta etapa inicia desde los 30 a los 65 años?',
    options: [
      { textAnswer: "Adolecencia.", isCorrect: false },
      { textAnswer: "Madurez", isCorrect: true },
      { textAnswer: "Infancia", isCorrect: false },
      { textAnswer: "Juventud.", isCorrect: false },
      { textAnswer: "Vejez.", isCorrect: false },
    ]
  },
  {
    title: '¿Esta etapa inicia desde los 18 a los 30 años?',
    options: [
      { textAnswer: "Adolecencia.", isCorrect: false },
      { textAnswer: "Madurez", isCorrect: false },
      { textAnswer: "Infancia", isCorrect: false },
      { textAnswer: "Juventud.", isCorrect: true },
      { textAnswer: "Vejez.", isCorrect: false },
    ]
  },
  {
    title: '¿Esta etapa inicia desde los 12 a los 18 años?',
    options: [
      { textAnswer: "Adolecencia.", isCorrect: true },
      { textAnswer: "Madurez", isCorrect: false },
      { textAnswer: "Infancia", isCorrect: false },
      { textAnswer: "Juventud.", isCorrect: false },
      { textAnswer: "Vejez.", isCorrect: false },
    ]
  },
  {
    title: '¿Esta etapa inicia desde los 65 hasta que fallece?',
    options: [
      { textAnswer: "Adolecencia.", isCorrect: false },
      { textAnswer: "Madurez", isCorrect: false },
      { textAnswer: "Infancia", isCorrect: false },
      { textAnswer: "Juventud.", isCorrect: false },
      { textAnswer: "Vejez.", isCorrect: true },
    ]
  },
  {
    title: '¿Seleccione tres medidas para evitar el contagio del covid 19?',
    options: [
      { textAnswer: "Ir enfermo a la escuela, lavarse las manos, no usar mascarilla", isCorrect: false },
      { textAnswer: "lavarse las manos, usar mascarilla, usar protocolo de tos y estornudo", isCorrect: true },
      { textAnswer: "No usar mascarilla, guardan la distancia, no lavarse las manos", isCorrect: false },
    ]
  },
  {
    title: '¿Cuales son dos carateristicas de la etapa de la adultes?',
    options: [
      { textAnswer: "Inicia a los 18 años, se prepara para formar una familia", isCorrect: false },
      { textAnswer: "Son más independientes, se hacen más responsables", isCorrect: true },
      { textAnswer: "Se aprovecha más del tiempo libre, inicia desde los 65 años", isCorrect: false },
    ]
  },
  {
    title: '¿Mencione tres accidentes que podemos tener en casa?',
    options: [
      { textAnswer: "Accidente de transito, atropello y asfixia", isCorrect: false },
      { textAnswer: "Atropello, quemadura y mordedura", isCorrect: false },
      { textAnswer: "Caida, quemadura y asfixia", isCorrect: true },
    ]
  },
  {
    title: '¿Tres normas de convivencia son?',
    options: [
      { textAnswer: "No esperar el turno, gritar al hablar, repetar las cosas de los demás", isCorrect: false },
      { textAnswer: "Esperar su turno, no botar basura, hablar sin gritar", isCorrect: true },
      { textAnswer: "Respetar las opiniones de los demás, gritar al hablar, ensuciar la escuela", isCorrect: false },
    ]
  },
  {
    title: '¿Cuales son dos carateristicas de la etapa de la madurez?',
    options: [
      { textAnswer: "Se prepara para formar una familia, inicia busqueda de trabajo", isCorrect: false },
      { textAnswer: "Se tiene mayor estabilidad en el trabajo, inicia a los 30 años", isCorrect: true },
      { textAnswer: "El cuerpo está en crecimiento, deja de trabajar", isCorrect: false },
    ]
  },
  {
    title: '¿Cuales son dos caracteristicas de la etapa de la infancia?',
    options: [
      { textAnswer: "Se deja de trabajar, necesitamos de la guia de la familia", isCorrect: false },
      { textAnswer: "Disfrutamos mucho los recreos e inicia desde el nacimiento", isCorrect: true },
      { textAnswer: "Inicia a los 18 años, se prepara para formar una familia", isCorrect: false },
    ]
  },
  {
    title: 'Tres medidas de prevencion para evitar un accidente son:',
    options: [
      { textAnswer: "Fijarse ante de cruzar la calle, no jugar con fuego y no tocar productos quimicos", isCorrect: true },
      { textAnswer: "No tocar productos quimicos, molestar al perro, comer rapido", isCorrect: false },
      { textAnswer: "Comer despacio, no molestar al perro, jugar con cuchillos", isCorrect: false },
    ]
  },
  {
    title: '¿Dos caracteristicas de la adolecencia son?',
    options: [
      { textAnswer: "Inicia a los 5 años y termina a los 12", isCorrect: false },
      { textAnswer: "Inicia a los 12 años y se da mas rapido el crecimiento del cuerpo", isCorrect: true },
      { textAnswer: "Inicia a los 18 años y necesitan la proteccion de la familia", isCorrect: false },
      { textAnswer: "Inicia a los 65 años hasta que fallece", isCorrect: false },
    ]
  },
  {
    title: '¿Lo hospitales atienden las?',
    options: [
      { textAnswer: "Emergencias y evacuaciones", isCorrect: false },
      { textAnswer: "Enfermedades y accidentes", isCorrect: true },
      { textAnswer: "Incendios y rescates", isCorrect: false },
    ]
  },
  {
    title: '¿Lo bomberos atienden los?',
    options: [
      { textAnswer: "Emergencias y evacuaciones", isCorrect: false },
      { textAnswer: "Enfermedades y accidentes", isCorrect: true },
      { textAnswer: "Incendios y rescates", isCorrect: true },
    ]
  },
  {
    title: '¿La cruz roja atienden las?',
    options: [
      { textAnswer: "Emergencias y evacuaciones", isCorrect: true },
      { textAnswer: "Enfermedades y accidentes", isCorrect: true },
      { textAnswer: "Incendios y rescates", isCorrect: false },
    ]
  },
];

export default preguntas;