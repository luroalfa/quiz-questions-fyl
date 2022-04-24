const preguntas = [
  {
    titulo: '¿Que es un Canton?',
    opciones: [
      { textAnswer: "Sector diminuto de territorios que unen cantones.", isCorrect: false },
      { textAnswer: "La union de varias provincias.", isCorrect: false },
      { textAnswer: "Sector Amplio de territorios que unen varios distritos.", isCorrect: true },
      { textAnswer: "Varias urbanizaciones.", isCorrect: false },
    ]
  },
  {
    titulo: 'Un distrito está formado por:',
    opciones: [
      { textAnswer: "Países.", isCorrect: false },
      { textAnswer: "Barrios, urbanizaciones y caseríos.", isCorrect: true },
      { textAnswer: "Continentes.", isCorrect: false },
      { textAnswer: "Provincias.", isCorrect: false },
    ]
  },
  {
    titulo: 'Mi cantón se llama:',
    opciones: [
      { textAnswer: "Atenas.", isCorrect: false },
      { textAnswer: "Grecia.", isCorrect: false },
      { textAnswer: "Alajuela.", isCorrect: true },
      { textAnswer: "Guatuso.", isCorrect: false },
    ]
  },
  {
    titulo: 'Mi distrito se llama:',
    opciones: [
      { textAnswer: "Guácima.", isCorrect: false },
      { textAnswer: "Garita.", isCorrect: false },
      { textAnswer: "San Rafael.", isCorrect: true },
      { textAnswer: "Sarapiquí.", isCorrect: false },
    ]
  },
  {
    titulo: 'Mi escuela esta en el distrito de:',
    opciones: [
      { textAnswer: "San Rafael.", isCorrect: true },
      { textAnswer: "Guácima.", isCorrect: false },
      { textAnswer: "Garita.", isCorrect: false },
      { textAnswer: "Sarapiquí.", isCorrect: false },
    ]
  },
  {
    titulo: 'Quienes integran el gobierno local de un canton?',
    opciones: [
      { textAnswer: "Maestros.", isCorrect: false },
      { textAnswer: "Alcades y regidores.", isCorrect: true },
      { textAnswer: "Estudiantes.", isCorrect: false },
      { textAnswer: "Precidente.", isCorrect: false },
    ]
  },
  {
    titulo: 'Mi país se llama:',
    opciones: [
      { textAnswer: "Nicaragua.", isCorrect: false },
      { textAnswer: "Alajuela.", isCorrect: false },
      { textAnswer: "Panama.", isCorrect: false },
      { textAnswer: "Costa Rica.", isCorrect: true },
    ]
  },
  {
    titulo: 'Mi país se encuentra en el continente:',
    opciones: [
      { textAnswer: "Asia.", isCorrect: false },
      { textAnswer: "Europa.", isCorrect: false },
      { textAnswer: "América.", isCorrect: true },
      { textAnswer: "África.", isCorrect: false },
    ]
  },
  {
    titulo: 'Mi canton tiene cuantos distritos?',
    opciones: [
      { textAnswer: "8", isCorrect: false },
      { textAnswer: "14", isCorrect: true },
      { textAnswer: "7", isCorrect: false },
      { textAnswer: "6", isCorrect: false },
    ]
  },
  {
    titulo: 'Cual es el nombre de su escuela?',
    opciones: [
      { textAnswer: "Escuela Enrique Pinto Fernández ", isCorrect: false },
      { textAnswer: "Liceo San Rafael de Alajuela", isCorrect: false },
      { textAnswer: "Escuela Jesus Sanchez Erazo", isCorrect: false },
      { textAnswer: "Escuela Julia Fernández Rodríguez", isCorrect: true },
    ]
  },
  {
    titulo: 'Lugar donde se compran medicamentos?',
    opciones: [
      { textAnswer: "Centro Educativo", isCorrect: false },
      { textAnswer: "Biblioteca", isCorrect: false },
      { textAnswer: "Mercado", isCorrect: false },
      { textAnswer: "Farmacia", isCorrect: true },
    ]
  },
  {
    titulo: 'Cuidan la salud de los habitantes?',
    opciones: [
      { textAnswer: "Bancos", isCorrect: false },
      { textAnswer: "Centro Comercial", isCorrect: false },
      { textAnswer: "Centro de Salud", isCorrect: true },
      { textAnswer: "Panadería", isCorrect: false },
    ]
  },
  {
    titulo: 'Encargados de brindar educación?',
    opciones: [
      { textAnswer: "Bancos y tiendas", isCorrect: false },
      { textAnswer: "Bomberos y policias", isCorrect: false },
      { textAnswer: "Escuelas y colegios", isCorrect: true },
      { textAnswer: "Carniceria y verdureria", isCorrect: false },
    ]
  },
  {
    titulo: 'Compramos articulos para la escuela?',
    opciones: [
      { textAnswer: "Carnicería", isCorrect: false },
      { textAnswer: "Escuela", isCorrect: false },
      { textAnswer: "Libreria", isCorrect: true },
      { textAnswer: "Joyeria", isCorrect: false },
    ]
  },
  {
    titulo: 'Trabajan para que la comunidad sea un lugar seguro?',
    opciones: [
      { textAnswer: "Bomberos", isCorrect: false },
      { textAnswer: "Cruz Rojistas", isCorrect: false },
      { textAnswer: "Policias", isCorrect: true },
      { textAnswer: "Panadeross", isCorrect: false },
    ]
  },
  {
    titulo: 'Cuantas provincias tiene Costa Rica?',
    opciones: [
      { textAnswer: "8", isCorrect: false },
      { textAnswer: "9", isCorrect: false },
      { textAnswer: "7", isCorrect: true },
      { textAnswer: "5", isCorrect: false },
    ]
  },
  {
    titulo: 'Atienden emergencias medicas:',
    opciones: [
      { textAnswer: "Librerias", isCorrect: false },
      { textAnswer: "Policias", isCorrect: false },
      { textAnswer: "Cruz rojistas", isCorrect: true },
      { textAnswer: "Super mercados", isCorrect: false },
    ]
  },
  {
    titulo: 'Quien se encarga de velar por el bienestar del progreso del canton?',
    opciones: [
      { textAnswer: "Paises", isCorrect: false },
      { textAnswer: "Cantones", isCorrect: false },
      { textAnswer: "Municipalidades", isCorrect: true },
      { textAnswer: "Distritos", isCorrect: false },
    ]
  },
  {
    titulo: 'Una provincia esta formada por:',
    opciones: [
      { textAnswer: "Paises", isCorrect: false },
      { textAnswer: "Cantones", isCorrect: false },
      { textAnswer: "Municipalidades", isCorrect: true },
      { textAnswer: "Distritos", isCorrect: false },
    ]
  },
  {
    titulo: 'La provincia donde esta mi escuela se llama:',
    opciones: [
      { textAnswer: "Heredia", isCorrect: false },
      { textAnswer: "San Jóse", isCorrect: false },
      { textAnswer: "Alajuela", isCorrect: true },
      { textAnswer: "Puntarenas", isCorrect: false },
    ]
  },
  {
    titulo: 'Como se les llama a las ciudades mas importantes de un Cantón?',
    opciones: [
      { textAnswer: "Urbanizaciones", isCorrect: false },
      { textAnswer: "Paises", isCorrect: false },
      { textAnswer: "Distritos", isCorrect: true },
      { textAnswer: "Barrios", isCorrect: false },
    ]
  },
  {
    titulo: 'Rescatan personas y apagan incendios?',
    opciones: [
      { textAnswer: "Policias", isCorrect: false },
      { textAnswer: "Cruz Roja", isCorrect: false },
      { textAnswer: "Farmacias", isCorrect: false },
      { textAnswer: "Bomberos", isCorrect: true },
    ]
  },
  {
    titulo: 'Ofrecen distintos servicios a la poblacion',
    opciones: [
      { textAnswer: "Centro de salud", isCorrect: false },
      { textAnswer: "Biblioteca", isCorrect: false },
      { textAnswer: "Centro Comercial", isCorrect: true },
      { textAnswer: "Supermercado", isCorrect: false },
    ]
  },
];

export default preguntas;