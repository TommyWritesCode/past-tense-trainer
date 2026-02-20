// ─── Direct word → English ────────────────────────────────────────────────────
const WORD_MAP = {
  // Pronouns
  yo:'I', tú:'you', él:'he', ella:'she', ellos:'they (m)', ellas:'they (f)',
  nosotros:'we', nosotras:'we (f)', ustedes:'you all', usted:'you (formal)',
  me:'me/myself', te:'you/yourself', se:'himself/herself', nos:'us/ourselves',
  le:'him/her', les:'them', lo:'it/him', la:'her/it', los:'them (m)',

  // Articles & determiners
  el:'the', las:'the (f pl)', un:'a', una:'a (f)', unos:'some', unas:'some (f)',
  este:'this', esta:'this (f)', estos:'these', estas:'these (f)',
  ese:'that', esa:'that (f)', esos:'those', esas:'those (f)',
  aquel:'that (over there)', aquella:'that (over there, f)',
  mi:'my', mis:'my (pl)', tu:'your', su:'his/her/their', sus:'his/her/their (pl)',
  nuestro:'our', nuestra:'our (f)', nuestros:'our (pl)', nuestras:'our (f pl)',

  // Conjunctions & connectors
  cuando:'when', y:'and', pero:'but', porque:'because', que:'that/which',
  si:'if', aunque:'although', mientras:'while', como:'like/how/as',
  después:'after/then', antes:'before', luego:'then/later', entonces:'then/so',
  así:'so/thus', finalmente:'finally', primero:'first', ya:'already/now',
  de:'of/from', desde:'since/from', hasta:'until/up to', por:'for/by/per',
  para:'for/in order to', en:'in/on/at', con:'with', sin:'without',
  sobre:'on/about', a:'to/at', al:'to the', del:'of the', o:'or', ni:'nor',
  durante:'during', entre:'between', hacia:'towards', según:'according to',
  además:'furthermore', también:'also/too', tampoco:'neither',
  incluso:'even/including', todavía:'still/yet', apenas:'barely/as soon as',
  justo:'just/right', donde:'where', cuya:'whose', aunque:'even though',
  no:'no/not', sí:'yes', nunca:'never',

  // Time expressions
  ayer:'yesterday', hoy:'today', mañana:'tomorrow/morning', mañanas:'mornings',
  siempre:'always', nunca:'never', veces:'times', vez:'time (instance)',
  tarde:'afternoon/late', tardes:'afternoons', noche:'night', noches:'nights',
  año:'year', años:'years', verano:'summer', navidad:'Christmas', semana:'week',
  semanas:'weeks', momento:'moment', ahora:'now', horas:'hours', hora:'hour',
  tiempo:'time/weather', día:'day', días:'days', meses:'months', mes:'month',
  lunes:'Monday', martes:'Tuesday', miércoles:'Wednesday', jueves:'Thursday',
  viernes:'Friday', sábado:'Saturday', sábados:'Saturdays', domingo:'Sunday',
  domingos:'Sundays', repente:'sudden(ly)', pronto:'soon', fin:'end/weekend',
  todo:'all/every', todos:'all/everyone', toda:'all', todas:'all (f)',
  cada:'each/every', nadie:'nobody', nada:'nothing', algo:'something',
  alguien:'someone', cualquier:'any', mismo:'same/himself', misma:'same/herself',
  pasado:'last/past', pasada:'last (f)', próximo:'next', próxima:'next (f)',
  época:'era/period', entonces:'back then', aquel:'that time',
  hace:'ago (hace X años = X years ago)', final:'end', principio:'beginning',
  primer:'first (m)', primera:'first (f)', último:'last/final', última:'last (f)',
  reciente:'recent', antiguo:'old/former',

  // People & family
  niño:'child/boy', niños:'children', niña:'girl', niñas:'girls',
  chico:'boy/guy', chica:'girl', chicos:'guys', chicas:'girls',
  hombre:'man', mujer:'woman/wife', bebé:'baby', bebés:'babies',
  amigo:'friend', amiga:'friend (f)', amigos:'friends',
  jefe:'boss', empleado:'employee', cliente:'client', médico:'doctor',
  hermano:'brother', hermana:'sister', hermanos:'siblings',
  mamá:'mom', madre:'mother', papá:'dad', padre:'father', padres:'parents',
  hijo:'son', hija:'daughter', hijos:'children/sons', abuelo:'grandfather',
  abuela:'grandmother', abuelos:'grandparents', tío:'uncle', tía:'aunt',
  vecino:'neighbor', vecinos:'neighbors', profesor:'teacher', profesora:'teacher (f)',
  estudiante:'student', entrenador:'coach/trainer', novio:'boyfriend',
  novia:'girlfriend', ex:'ex (partner)', esposo:'husband', esposa:'wife',

  // Places
  casa:'house/home', apartamento:'apartment', cuarto:'room/bedroom',
  cocina:'kitchen', baño:'bathroom', sala:'living room', patio:'yard',
  oficina:'office', trabajo:'work/job', escuela:'school', colegio:'school',
  universidad:'university', biblioteca:'library', museo:'museum',
  tienda:'store/shop', mercado:'market', supermercado:'supermarket',
  restaurante:'restaurant', café:'café/coffee', banco:'bank', hospital:'hospital',
  farmacia:'pharmacy', cine:'cinema', teatro:'theater', parque:'park',
  playa:'beach', mar:'sea', montaña:'mountain', ciudad:'city', pueblo:'town',
  país:'country', países:'countries', europa:'Europe', piscina:'pool',
  aeropuerto:'airport', hotel:'hotel', club:'club', autopista:'highway/freeway',
  calle:'street', calles:'streets', camino:'road/path', puente:'bridge',

  // Things
  teléfono:'phone', teléfonos:'phones', computadora:'computer', televisión:'TV',
  internet:'internet', wifi:'wifi', consola:'gaming console',
  libro:'book', periódico:'newspaper', revista:'magazine', carta:'letter',
  cartas:'letters/cards', diario:'diary/journal', cómics:'comics',
  foto:'photo', regalo:'gift', maleta:'suitcase', mochila:'backpack',
  llave:'key', llaves:'keys', paraguas:'umbrella',
  alarma:'alarm', timbre:'doorbell/bell', música:'music', guitarra:'guitar',
  película:'movie', películas:'movies', serie:'TV show/series',
  videojuegos:'video games', rock:'rock music',
  correo:'mail/email', email:'email', mensaje:'message', noticia:'news item',
  noticias:'news', notificación:'notification',
  botella:'bottle', caja:'box', balde:'bucket', bolsa:'bag/purse',
  plato:'plate/dish', platos:'dishes/plates', vaso:'glass', taza:'cup',
  ropa:'clothes', abrigo:'coat', sombrero:'hat', zapatos:'shoes',
  camisa:'shirt', vestido:'dress', pantalón:'pants', pelo:'hair',
  mochila:'backpack', maleta:'suitcase',
  carro:'car', bicicleta:'bicycle', avión:'plane', tren:'train', taxi:'taxi',
  autobús:'bus', llanta:'tire', km:'km', kilómetros:'kilometers',
  contrato:'contract', salario:'salary', empresa:'company', proyecto:'project',
  presentación:'presentation', reunión:'meeting', examen:'exam', nota:'grade',
  recibo:'receipt', dinero:'money', precio:'price', cuenta:'bill/account',
  puerta:'door', pared:'wall', suelo:'floor', techo:'ceiling', mesa:'table',
  silla:'chair', cama:'bed', sofá:'sofa', ventana:'window', escalera:'stairs',

  // Food & drink
  comida:'food', desayuno:'breakfast', almuerzo:'lunch', cena:'dinner',
  pan:'bread', leche:'milk', café:'coffee', jugo:'juice', agua:'water',
  vino:'wine', cerveza:'beer', sopa:'soup', salsa:'sauce/salsa',
  huevo:'egg', huevos:'eggs', carne:'meat', pollo:'chicken',
  verdura:'vegetable', fruta:'fruit', tamales:'tamales',

  // Nature & weather
  sol:'sun', luna:'moon', cielo:'sky', lluvia:'rain', viento:'wind',
  nieve:'snow', nube:'cloud', tormenta:'storm', temblor:'earthquake/tremor',
  huracán:'hurricane', incendio:'fire (building)', calor:'heat',
  frío:'cold', corriente:'current (water)', mar:'sea',
  árbol:'tree', flor:'flower', perro:'dog', gato:'cat', tiburón:'shark',

  // Health & body
  dolor:'pain/ache', estrés:'stress', emergencia:'emergency',
  enfermo:'sick/ill', enferma:'sick (f)', muerto:'dead/discharged',

  // Abstract nouns
  idea:'idea', tema:'topic/theme', política:'politics', discusión:'argument',
  disparo:'shot/gunshot', esfuerzo:'effort', falta:'absence/lack',
  principio:'beginning', final:'end', respuesta:'answer/response',
  palabras:'words', palabra:'word', cosa:'thing', cosas:'things',
  gente:'people', turistas:'tourists', evento:'event',
  pandemia:'pandemic', modernización:'modernization', construcción:'construction',
  torneo:'tournament', partido:'match/game', partidos:'matches',
  misa:'mass (church)', fila:'line/queue', fiesta:'party',

  // Adjectives
  joven:'young', pequeño:'small', pequeña:'small (f)', pequeños:'small (pl)',
  grande:'big', viejo:'old', nuevo:'new', nueva:'new (f)',
  bonito:'pretty', feo:'ugly', bueno:'good', malo:'bad',
  fácil:'easy', difícil:'difficult', rápido:'fast', lento:'slow',
  alto:'tall/high', bajo:'short/low', fuerte:'strong/loud', débil:'weak',
  caliente:'hot', cálido:'warm', fresco:'fresh/cool', seco:'dry', mojado:'wet',
  sucio:'dirty', limpio:'clean', oscuro:'dark', oscura:'dark (f)',
  claro:'clear/light', brillante:'bright', cansado:'tired', cansada:'tired (f)',
  contento:'happy', triste:'sad', enojado:'angry', nervioso:'nervous',
  nerviosa:'nervous (f)', tranquilo:'calm', solo:'alone', sola:'alone (f)',
  ocupado:'busy', libre:'free', listo:'ready/clever', seguro:'safe/sure',
  extraño:'strange', normal:'normal', especial:'special', importante:'important',
  urgente:'urgent', posible:'possible', increíble:'incredible',
  terrible:'terrible', horrible:'horrible', hermoso:'beautiful',
  acogedora:'cozy/welcoming', despejado:'clear (sky)', diferente:'different',
  diferentes:'different (pl)', estricto:'strict', justo:'fair/just',
  largo:'long', largo:'long', lleno:'full', azul:'blue', rojo:'red',
  negro:'black', negro:'black', inteligentes:'smart/intelligent',
  favorita:'favorite (f)', mejor:'better/best', consecutivos:'consecutive',
  seguidas:'consecutive/in a row', juntos:'together', tranquilamente:'calmly',

  // Adverbs & expressions
  bien:'well', mal:'badly', muy:'very', mucho:'a lot', mucha:'a lot (f)',
  muchos:'many', muchas:'many (f)', poco:'a little', más:'more', menos:'less',
  tan:'so/as', también:'also', tampoco:'neither', todavía:'still',
  rápidamente:'quickly', lentamente:'slowly', exactamente:'exactly',
  absolutamente:'absolutely', completamente:'completely',
  afuera:'outside', adentro:'inside', arriba:'up/above', abajo:'down/below',
  cerca:'near', lejos:'far', aquí:'here', allí:'there', allá:'over there',
  fuera:'outside/away',

  // Numbers
  uno:'one', dos:'two', tres:'three', cuatro:'four', cinco:'five',
  seis:'six', siete:'seven', ocho:'eight', nueve:'nine', diez:'ten',
  veinte:'twenty', treinta:'thirty', cien:'hundred', mil:'thousand',
  primer:'first', primera:'first (f)', segundo:'second', tercero:'third',

  // Misc commonly used
  donde:'where', cuya:'whose', hasta:'until',
  hace:'ago / makes', hijos:'children/sons',
  astronauta:'astronaut', adolescente:'teenager',
  cuento:'story', abuelo:'grandfather',
  mar:'sea', misa:'church mass',
};

// ─── Irregular verb forms → infinitive ───────────────────────────────────────
const VERB_FORMS = {
  era:'ser', eras:'ser', éramos:'ser', eran:'ser',
  fui:'ir/ser', fuiste:'ir/ser', fue:'ir/ser', fuimos:'ir/ser', fueron:'ir/ser',
  iba:'ir', ibas:'ir', íbamos:'ir', iban:'ir',
  tenía:'tener', tenías:'tener', teníamos:'tener', tenían:'tener',
  tuve:'tener', tuviste:'tener', tuvo:'tener', tuvimos:'tener', tuvieron:'tener',
  estaba:'estar', estabas:'estar', estábamos:'estar', estaban:'estar',
  estuve:'estar', estuviste:'estar', estuvo:'estar', estuvimos:'estar', estuvieron:'estar',
  había:'haber', habías:'haber', habíamos:'haber', habían:'haber', hubo:'haber',
  quería:'querer', querías:'querer', queríamos:'querer', querían:'querer',
  quise:'querer', quisiste:'querer', quiso:'querer', quisimos:'querer', quisieron:'querer',
  sabía:'saber', sabías:'saber', sabíamos:'saber', sabían:'saber',
  supe:'saber', supiste:'saber', supo:'saber', supimos:'saber', supieron:'saber',
  podía:'poder', podías:'poder', podíamos:'poder', podían:'poder',
  pude:'poder', pudiste:'poder', pudo:'poder', pudimos:'poder', pudieron:'poder',
  conocía:'conocer', conocías:'conocer', conocíamos:'conocer', conocían:'conocer',
  conocí:'conocer', conociste:'conocer', conoció:'conocer', conocimos:'conocer', conocieron:'conocer',
  hacía:'hacer', hacías:'hacer', hacíamos:'hacer', hacían:'hacer',
  hice:'hacer', hiciste:'hacer', hizo:'hacer', hicimos:'hacer', hicieron:'hacer',
  veía:'ver', veías:'ver', veíamos:'ver', veían:'ver',
  vi:'ver', viste:'ver', vio:'ver', vimos:'ver', vieron:'ver',
  decía:'decir', decías:'decir', decíamos:'decir', decían:'decir',
  dije:'decir', dijiste:'decir', dijo:'decir', dijimos:'decir', dijeron:'decir',
  ponía:'poner', ponías:'poner', poníamos:'poner', ponían:'poner',
  puse:'poner', pusiste:'poner', puso:'poner', pusimos:'poner', pusieron:'poner',
  venía:'venir', venías:'venir', veníamos:'venir', venían:'venir',
  vine:'venir', viniste:'venir', vino:'venir', vinimos:'venir', vinieron:'venir',
  leía:'leer', leías:'leer', leíamos:'leer', leían:'leer',
  leí:'leer', leíste:'leer', leyó:'leer', leímos:'leer', leyeron:'leer',
  oía:'oír', oías:'oír', oíamos:'oír', oían:'oír',
  oí:'oír', oíste:'oír', oyó:'oír', oímos:'oír', oyeron:'oír',
  traía:'traer', traías:'traer', traíamos:'traer', traían:'traer',
  traje:'traer', trajiste:'traer', trajo:'traer', trajimos:'traer', trajeron:'traer',
  dormía:'dormir', dormías:'dormir', dormíamos:'dormir', dormían:'dormir',
  dormí:'dormir', dormiste:'dormir', durmió:'dormir', dormimos:'dormir', durmieron:'dormir',
  sentía:'sentir', sentías:'sentir', sentíamos:'sentir', sentían:'sentir',
  sentí:'sentir', sentiste:'sentir', sintió:'sentir', sentimos:'sentir', sintieron:'sentir',
  pedía:'pedir', pedías:'pedir', pedíamos:'pedir', pedían:'pedir',
  pedí:'pedir', pediste:'pedir', pidió:'pedir', pedimos:'pedir', pidieron:'pedir',
  daba:'dar', dabas:'dar', dábamos:'dar', daban:'dar',
  di:'dar', diste:'dar', dio:'dar', dimos:'dar', dieron:'dar',
  caía:'caer', caías:'caer', caíamos:'caer', caían:'caer',
  caí:'caer', caíste:'caer', cayó:'caer', caímos:'caer', cayeron:'caer',
  seguía:'seguir', seguías:'seguir', seguíamos:'seguir', seguían:'seguir',
  seguí:'seguir', seguiste:'seguir', siguió:'seguir', seguimos:'seguir', siguieron:'seguir',
  reía:'reír', reías:'reír', reíamos:'reír', reían:'reír',
  reí:'reír', reíste:'reír', rió:'reír', reímos:'reír', rieron:'reír',
  conducía:'conducir', conducías:'conducir', conducíamos:'conducir', conducían:'conducir',
  conduje:'conducir', condujiste:'conducir', condujo:'conducir', condujimos:'conducir', condujeron:'conducir',
  nací:'nacer', naciste:'nacer', nació:'nacer', nacimos:'nacer', nacieron:'nacer',
  detuvo:'detener', detuve:'detener', detuviste:'detener', detuvimos:'detener', detuvieron:'detener',
  detenía:'detener', detenías:'detener', detenían:'detener',
  apagué:'apagar', apagó:'apagar', apagaste:'apagar', apagaron:'apagar', apagaba:'apagar', apagaban:'apagar',
  encendí:'encender', encendió:'encender', encendiste:'encender', encendieron:'encender',
  volví:'volver', volviste:'volver', volvió:'volver', volvimos:'volver', volvieron:'volver',
  volvía:'volver', volvías:'volver', volvíamos:'volver', volvían:'volver',
  rompí:'romper', rompiste:'romper', rompió:'romper', rompimos:'romper', rompieron:'romper',
  perdí:'perder', perdiste:'perder', perdió:'perder', perdimos:'perder', perdieron:'perder',
  perdía:'perder', perdías:'perder', perdíamos:'perder', perdían:'perder',
  empecé:'empezar', empezaste:'empezar', empezó:'empezar', empezamos:'empezar', empezaron:'empezar',
  empezaba:'empezar', empezabas:'empezar', empezaban:'empezar',
  salí:'salir', saliste:'salir', salió:'salir', salimos:'salir', salieron:'salir',
  salía:'salir', salías:'salir', salíamos:'salir', salían:'salir',
};

// ─── Infinitive → English ─────────────────────────────────────────────────────
const VERB_TRANSLATIONS = {
  ser:'to be (permanent quality)', estar:'to be (state/location)', haber:'to have (auxiliary)',
  ir:'to go', venir:'to come', tener:'to have', hacer:'to do/make',
  poder:'to be able to / can', querer:'to want/love', saber:'to know (a fact)',
  conocer:'to know (a person/place)', decir:'to say/tell', ver:'to see/watch',
  poner:'to put/place', traer:'to bring', dar:'to give', caer:'to fall',
  leer:'to read', oír:'to hear', seguir:'to follow/continue', reír:'to laugh',
  conducir:'to drive', nacer:'to be born', detener:'to stop/detain',
  estudiar:'to study', dormir:'to sleep', hablar:'to talk/speak',
  llover:'to rain', correr:'to run', cocinar:'to cook', trabajar:'to work',
  cantar:'to sing', escribir:'to write', jugar:'to play', pensar:'to think',
  esperar:'to wait/hope', caminar:'to walk', manejar:'to drive (LatAm)',
  ducharse:'to shower', duchar:'to shower', mirar:'to look at/watch',
  buscar:'to look for', comer:'to eat', beber:'to drink',
  llegar:'to arrive', salir:'to leave/go out', entrar:'to enter',
  tocar:'to play (music) / touch', viajar:'to travel',
  levantarse:'to get up', escuchar:'to listen', decidir:'to decide',
  empezar:'to start/begin', terminar:'to finish', ganar:'to win/earn',
  preparar:'to prepare', abrir:'to open', llamar:'to call', comprar:'to buy',
  despertar:'to wake up', oler:'to smell', sentirse:'to feel',
  sonar:'to sound/ring', llevar:'to carry/wear', parecer:'to seem',
  costar:'to cost', vivir:'to live', encontrar:'to find/meet',
  nadar:'to swim', bailar:'to dance', descansar:'to rest',
  cenar:'to have dinner', desayunar:'to have breakfast', almorzar:'to have lunch',
  rezar:'to pray', visitar:'to visit', volver:'to return/come back',
  ayudar:'to help', olvidar:'to forget', recordar:'to remember',
  necesitar:'to need', usar:'to use', vender:'to sell',
  aprender:'to learn', enseñar:'to teach', explicar:'to explain',
  preguntar:'to ask', contestar:'to answer', gritar:'to shout',
  llorar:'to cry', sonreír:'to smile', cortar:'to cut', romper:'to break',
  perder:'to lose/miss', gastar:'to spend (money)', ahorrar:'to save (money)',
  limpiar:'to clean', lavar:'to wash', planchar:'to iron',
  pintar:'to paint', dibujar:'to draw', construir:'to build',
  arreglar:'to fix', cambiar:'to change', mejorar:'to improve',
  subir:'to go up', bajar:'to go down', cerrar:'to close',
  encender:'to turn on', apagar:'to turn off', mover:'to move',
  pagar:'to pay', cobrar:'to charge/collect', reservar:'to reserve/book',
  cancelar:'to cancel', parar:'to stop', continuar:'to continue',
  quedarse:'to stay/remain', irse:'to leave', casarse:'to get married',
  ladrar:'to bark', quemar:'to burn', ladrar:'to bark',
};

// ─── Regular ending patterns ──────────────────────────────────────────────────
const REGULAR_PATTERNS = [
  { ending:'ábamos', type:'ar' }, { ending:'abais', type:'ar' },
  { ending:'abas', type:'ar' }, { ending:'aban', type:'ar' }, { ending:'aba', type:'ar' },
  { ending:'íamos', type:'erir' }, { ending:'íais', type:'erir' },
  { ending:'ías', type:'erir' }, { ending:'ían', type:'erir' }, { ending:'ía', type:'erir' },
  { ending:'asteis', type:'ar' }, { ending:'amos', type:'ar' },
  { ending:'aste', type:'ar' }, { ending:'aron', type:'ar' },
  { ending:'isteis', type:'erir' }, { ending:'imos', type:'erir' },
  { ending:'iste', type:'erir' }, { ending:'ieron', type:'erir' },
  { ending:'ió', type:'erir' }, { ending:'ó', type:'ar' }, { ending:'é', type:'ar' },
  { ending:'í', type:'erir' },
];

function tryRegularStem(word) {
  for (const { ending, type } of REGULAR_PATTERNS) {
    if (word.endsWith(ending)) {
      const stem = word.slice(0, -ending.length);
      if (stem.length < 2) continue;
      if (type === 'ar') return [stem + 'ar'];
      return [stem + 'er', stem + 'ir'];
    }
  }
  return [];
}

// ─── Main lookup ──────────────────────────────────────────────────────────────
export function lookupWord(raw) {
  if (!raw) return null;
  const word = raw.toLowerCase().replace(/[¿?¡!.,;:"'()\[\]«»\-]/g, '');
  if (!word || word.length < 2) return null;

  // 1. Direct map hit
  if (WORD_MAP[word]) return WORD_MAP[word];

  // 2. Explicit irregular verb form
  if (VERB_FORMS[word]) {
    const inf = VERB_FORMS[word];
    const trans = VERB_TRANSLATIONS[inf];
    return trans ? `${inf} — ${trans}` : inf;
  }

  // 3. Regular ending stripper
  const candidates = tryRegularStem(word);
  for (const inf of candidates) {
    if (VERB_TRANSLATIONS[inf]) return `${inf} — ${VERB_TRANSLATIONS[inf]}`;
  }

  // 4. Direct infinitive check
  if (VERB_TRANSLATIONS[word]) return VERB_TRANSLATIONS[word];

  // 5. Try singular (strip trailing 's')
  if (word.endsWith('s') && word.length > 3) {
    const singular = word.slice(0, -1);
    if (WORD_MAP[singular]) return WORD_MAP[singular];
  }

  return null;
}

export default WORD_MAP;
