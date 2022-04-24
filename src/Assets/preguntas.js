const preguntas = [
  {
    title: '¿Que es un Canton?',
    options: [
      { textAnswer: "Sector diminuto de territorios que unen cantones.", isCorrect: false },
      { textAnswer: "La union de varias provincias.", isCorrect: false },
      { textAnswer: "Sector Amplio de territorios que unen varios distritos.", isCorrect: true },
      { textAnswer: "Varias urbanizaciones.", isCorrect: false },
    ]
  },
  {
    title: 'Un distrito está formado por:',
    options: [
      { textAnswer: "Países.", isCorrect: false },
      { textAnswer: "Barrios, urbanizaciones y caseríos.", isCorrect: true },
      { textAnswer: "Continentes.", isCorrect: false },
      { textAnswer: "Provincias.", isCorrect: false },
    ]
  },
  // {
  //   title: 'Mi cantón se llama:',
  //   options: [
  //     { textAnswer: "Atenas.", isCorrect: false },
  //     { textAnswer: "Grecia.", isCorrect: false },
  //     { textAnswer: "Alajuela.", isCorrect: true },
  //     { textAnswer: "Guatuso.", isCorrect: false },
  //   ]
  // },
  // {
  //   title: 'Mi distrito se llama:',
  //   options: [
  //     { textAnswer: "Guácima.", isCorrect: false },
  //     { textAnswer: "Garita.", isCorrect: false },
  //     { textAnswer: "San Rafael.", isCorrect: true },
  //     { textAnswer: "Sarapiquí.", isCorrect: false },
  //   ]
  // },
  // {
  //   title: 'Mi escuela esta en el distrito de:',
  //   options: [
  //     { textAnswer: "San Rafael.", isCorrect: true },
  //     { textAnswer: "Guácima.", isCorrect: false },
  //     { textAnswer: "Garita.", isCorrect: false },
  //     { textAnswer: "Sarapiquí.", isCorrect: false },
  //   ]
  // },
  // {
  //   title: 'Quienes integran el gobierno local de un canton?',
  //   options: [
  //     { textAnswer: "Maestros.", isCorrect: false },
  //     { textAnswer: "Alcades y regidores.", isCorrect: true },
  //     { textAnswer: "Estudiantes.", isCorrect: false },
  //     { textAnswer: "Precidente.", isCorrect: false },
  //   ]
  // },
  // {
  //   title: 'Mi país se llama:',
  //   options: [
  //     { textAnswer: "Nicaragua.", isCorrect: false },
  //     { textAnswer: "Alajuela.", isCorrect: false },
  //     { textAnswer: "Panama.", isCorrect: false },
  //     { textAnswer: "Costa Rica.", isCorrect: true },
  //   ]
  // },
  // {
  //   title: 'Mi país se encuentra en el continente:',
  //   options: [
  //     { textAnswer: "Asia.", isCorrect: false },
  //     { textAnswer: "Europa.", isCorrect: false },
  //     { textAnswer: "América.", isCorrect: true },
  //     { textAnswer: "África.", isCorrect: false },
  //   ]
  // },
  // {
  //   title: 'Mi canton tiene cuantos distritos?',
  //   options: [
  //     { textAnswer: "8", isCorrect: false },
  //     { textAnswer: "14", isCorrect: true },
  //     { textAnswer: "7", isCorrect: false },
  //     { textAnswer: "6", isCorrect: false },
  //   ]
  // },
  // {
  //   title: 'Cual es el nombre de su escuela?',
  //   options: [
  //     { textAnswer: "Escuela Enrique Pinto Fernández ", isCorrect: false },
  //     { textAnswer: "Liceo San Rafael de Alajuela", isCorrect: false },
  //     { textAnswer: "Escuela Jesus Sanchez Erazo", isCorrect: false },
  //     { textAnswer: "Escuela Julia Fernández Rodríguez", isCorrect: true },
  //   ]
  // },
  // {
  //   title: 'Lugar donde se compran medicamentos?',
  //   options: [
  //     { textAnswer: "Centro Educativo", isCorrect: false },
  //     { textAnswer: "Biblioteca", isCorrect: false },
  //     { textAnswer: "Mercado", isCorrect: false },
  //     { textAnswer: "Farmacia", isCorrect: true },
  //   ]
  // },
  // {
  //   title: 'Cuidan la salud de los habitantes?',
  //   options: [
  //     { textAnswer: "Bancos", isCorrect: false },
  //     { textAnswer: "Centro Comercial", isCorrect: false },
  //     { textAnswer: "Centro de Salud", isCorrect: true },
  //     { textAnswer: "Panadería", isCorrect: false },
  //   ]
  // },
  // {
  //   title: 'Encargados de brindar educación?',
  //   options: [
  //     { textAnswer: "Bancos y tiendas", isCorrect: false },
  //     { textAnswer: "Bomberos y policias", isCorrect: false },
  //     { textAnswer: "Escuelas y colegios", isCorrect: true },
  //     { textAnswer: "Carniceria y verdureria", isCorrect: false },
  //   ]
  // },
  // {
  //   title: 'Compramos articulos para la escuela?',
  //   options: [
  //     { textAnswer: "Carnicería", isCorrect: false },
  //     { textAnswer: "Escuela", isCorrect: false },
  //     { textAnswer: "Libreria", isCorrect: true },
  //     { textAnswer: "Joyeria", isCorrect: false },
  //   ]
  // },
  // {
  //   title: 'Trabajan para que la comunidad sea un lugar seguro?',
  //   options: [
  //     { textAnswer: "Bomberos", isCorrect: false },
  //     { textAnswer: "Cruz Rojistas", isCorrect: false },
  //     { textAnswer: "Policias", isCorrect: true },
  //     { textAnswer: "Panadeross", isCorrect: false },
  //   ]
  // },
  // {
  //   title: 'Cuantas provincias tiene Costa Rica?',
  //   options: [
  //     { textAnswer: "8", isCorrect: false },
  //     { textAnswer: "9", isCorrect: false },
  //     { textAnswer: "7", isCorrect: true },
  //     { textAnswer: "5", isCorrect: false },
  //   ]
  // },
  // {
  //   title: 'Atienden emergencias medicas:',
  //   options: [
  //     { textAnswer: "Librerias", isCorrect: false },
  //     { textAnswer: "Policias", isCorrect: false },
  //     { textAnswer: "Cruz rojistas", isCorrect: true },
  //     { textAnswer: "Super mercados", isCorrect: false },
  //   ]
  // },
  // {
  //   title: 'Quien se encarga de velar por el bienestar del progreso del canton?',
  //   options: [
  //     { textAnswer: "Paises", isCorrect: false },
  //     { textAnswer: "Municipalidades", isCorrect: true },
  //     { textAnswer: "Cantones", isCorrect: false },
  //     { textAnswer: "Distritos", isCorrect: false },
  //   ]
  // },
  // {
  //   title: 'Una provincia esta formada por:',
  //   options: [
  //     { textAnswer: "Paises", isCorrect: false },
  //     { textAnswer: "Cantones", isCorrect: true },
  //     { textAnswer: "Municipalidades", isCorrect: false },
  //     { textAnswer: "Distritos", isCorrect: false },
  //   ]
  // },
  // {
  //   title: 'La provincia donde esta mi escuela se llama:',
  //   options: [
  //     { textAnswer: "Heredia", isCorrect: false },
  //     { textAnswer: "San Jóse", isCorrect: false },
  //     { textAnswer: "Alajuela", isCorrect: true },
  //     { textAnswer: "Puntarenas", isCorrect: false },
  //   ]
  // },
  // {
  //   title: 'Como se llama a la ciudad mas importante de un cantón?',
  //   options: [
  //     { textAnswer: "Urbanizaciones", isCorrect: false },
  //     { textAnswer: "Paises", isCorrect: false },
  //     { textAnswer: "Cabecera de cantón.", isCorrect: true },
  //     { textAnswer: "Barrios", isCorrect: false },
  //   ]
  // },
  // {
  //   title: 'Rescatan personas y apagan incendios?',
  //   options: [
  //     { textAnswer: "Policias", isCorrect: false },
  //     { textAnswer: "Cruz Roja", isCorrect: false },
  //     { textAnswer: "Farmacias", isCorrect: false },
  //     { textAnswer: "Bomberos", isCorrect: true },
  //   ]
  // },
  // {
  //   title: 'Ofrecen distintos servicios a la poblacion',
  //   options: [
  //     { textAnswer: "Centro de salud", isCorrect: false },
  //     { textAnswer: "Biblioteca", isCorrect: false },
  //     { textAnswer: "Centro Comercial", isCorrect: true },
  //     { textAnswer: "Supermercado", isCorrect: false },
  //   ]
  // },
];

export default preguntas;