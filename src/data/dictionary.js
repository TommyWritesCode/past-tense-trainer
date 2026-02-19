// ─── Direct word → English ────────────────────────────────────────────────────
const WORD_MAP = {
  // Articles & determiners
  el:'the', la:'the', los:'the', las:'the', un:'a', una:'a', unos:'some', unas:'some',
  este:'this', esta:'this', estos:'these', estas:'these',
  ese:'that', esa:'that', esos:'those', esas:'those',
  mi:'my', mis:'my', tu:'your', su:'his/her/their', sus:'his/her/their',
  nuestro:'our', nuestra:'our', nuestros:'our', nuestras:'our',

  // Conjunctions & connectors
  cuando:'when', y:'and', pero:'but', porque:'because', que:'that/which',
  si:'if', aunque:'although', mientras:'while', como:'like/how/as',
  después:'after/then', antes:'before', luego:'then/later', entonces:'then/so',
  así:'so/thus', finalmente:'finally', primero:'first', ya:'already/now',
  de:'of/from', desde:'since/from', hasta:'until/up to', por:'for/by',
  para:'for/in order to', en:'in/on/at', con:'with', sin:'without',
  sobre:'on/about', a:'to/at', al:'to the', del:'of the', o:'or', ni:'nor',
  durante:'during', entre:'between', hacia:'towards', según:'according to',
  además:'furthermore', también:'also/too', tampoco:'neither',
  incluso:'even/including', sin:'without', todavía:'still/yet',
  apenas:'barely/as soon as', justo:'just/right',

  // Time expressions
  ayer:'yesterday', hoy:'today', mañana:'tomorrow/morning',
  siempre:'always', nunca:'never', veces:'times', vez:'time (instance)',
  tarde:'afternoon/late', noche:'night', año:'year', años:'years',
  verano:'summer', navidad:'Christmas', semana:'week',
  momento:'moment', ahora:'now', horas:'hours', hora:'hour',
  tiempo:'time/weather', día:'day', días:'days', noches:'nights',
  lunes:'Monday', martes:'Tuesday', miércoles:'Wednesday',
  jueves:'Thursday', viernes:'Friday', sábado:'Saturday', domingo:'Sunday',
  repente:'sudden(ly)', pronto:'soon', aquel:'that (over there)',
  todo:'all/every', todos:'all/everyone', toda:'all/entire', todas:'all',
  cada:'each/every', nadie:'nobody', nada:'nothing', algo:'something',
  alguien:'someone', cualquier:'any', mismo:'same/himself', misma:'same/herself',
  pasado:'last/past', pasada:'last', próximo:'next', próxima:'next',
  reciente:'recent', antiguo:'old/former', nuevo:'new', primera:'first',

  // Common nouns
  teléfono:'phone', cuarto:'room/bedroom', hermano:'brother', hermana:'sister',
  parque:'park', mamá:'mom', madre:'mother', padre:'father', papá:'dad',
  alarma:'alarm', jardín:'garden', accidente:'accident', libro:'book',
  ruido:'noise', chica:'girl', chico:'boy', escenario:'stage', luz:'light',
  email:'email', correo:'mail/email', jefe:'boss', oficina:'office',
  patio:'yard/patio', mensaje:'message', autobús:'bus', aguacero:'downpour',
  calle:'street', policía:'police', agua:'water', tarea:'homework/task',
  fiesta:'party', ventana:'window', llaves:'keys', fútbol:'soccer',
  película:'movie', películas:'movies', guitarra:'guitar',
  universidad:'university', medianoche:'midnight', rock:'rock (music)',
  cuento:'story/tale', tamales:'tamales', supermercado:'supermarket',
  taxi:'taxi', aeropuerto:'airport', hotel:'hotel', vestuario:'locker room',
  conferencia:'conference', hospital:'hospital', urgencias:'emergency room',
  carta:'letter', sobre:'envelope', maratón:'marathon', botella:'bottle',
  caja:'box', partido:'match/game', equipo:'team', clase:'class/classroom',
  cocina:'kitchen', pueblo:'town/village', club:'club',
  entrevista:'interview', gasolina:'gas/petrol', guerra:'war',
  casa:'house/home', apartamento:'apartment', música:'music', café:'coffee',
  niño:'child/boy', niños:'children', niña:'girl', amigo:'friend',
  amiga:'friend (f)', profesora:'teacher (f)', profesor:'teacher',
  abuela:'grandmother', abuelos:'grandparents', tío:'uncle', padres:'parents',
  piscina:'pool', playa:'beach', montaña:'mountain', ciudad:'city',
  trabajo:'work/job', tienda:'store/shop', mercado:'market',
  restaurante:'restaurant', banco:'bank', cine:'cinema/movie theater',
  teatro:'theater', museo:'museum', biblioteca:'library', escuela:'school',
  colegio:'school', médico:'doctor', enfermera:'nurse', farmacia:'pharmacy',
  dinero:'money', precio:'price', cuenta:'bill/account', recibo:'receipt',
  puerta:'door', pared:'wall', suelo:'floor', techo:'ceiling/roof',
  mesa:'table', silla:'chair', cama:'bed', sofá:'sofa/couch',
  ropa:'clothes', zapatos:'shoes', sombrero:'hat', abrigo:'coat',
  camisa:'shirt', pantalón:'pants', vestido:'dress',
  comida:'food', desayuno:'breakfast', almuerzo:'lunch', cena:'dinner',
  pan:'bread', leche:'milk', jugo:'juice', vino:'wine', cerveza:'beer',
  verdura:'vegetable', fruta:'fruit', carne:'meat', pollo:'chicken',
  sol:'sun', luna:'moon', estrella:'star', cielo:'sky', lluvia:'rain',
  viento:'wind', nieve:'snow', nube:'cloud', tormenta:'storm',
  árbol:'tree', flor:'flower', hierba:'grass', río:'river', lago:'lake',
  perro:'dog', gato:'cat', pájaro:'bird', caballo:'horse',
  carro:'car', bicicleta:'bicycle', avión:'plane', tren:'train',
  llave:'key', teléfono:'phone', computadora:'computer', televisión:'TV',
  periódico:'newspaper', revista:'magazine', foto:'photo',
  regalo:'gift', cumpleaños:'birthday', boda:'wedding', viaje:'trip',
  mochila:'backpack', maleta:'suitcase', paraguas:'umbrella',
  semáforo:'traffic light', camino:'road/path', puente:'bridge',
  escalera:'stairs/ladder', ascensor:'elevator', pasillo:'hallway',
  clase:'class', examen:'exam/test', nota:'grade/note', tarea:'homework',
  proyecto:'project', presentación:'presentation', reunión:'meeting',
  jefe:'boss', empleado:'employee', cliente:'client/customer',
  contrato:'contract', salario:'salary', empresa:'company',

  // Adjectives
  joven:'young', pequeño:'small', pequeña:'small', grande:'big/large',
  viejo:'old', nuevo:'new', bonito:'pretty', feo:'ugly',
  bueno:'good', malo:'bad', fácil:'easy', difícil:'difficult',
  rápido:'fast', lento:'slow', alto:'tall/high', bajo:'short/low',
  gordo:'fat', delgado:'thin', fuerte:'strong/loud', débil:'weak',
  caliente:'hot', frío:'cold', cálido:'warm', fresco:'cool/fresh',
  seco:'dry', mojado:'wet', sucio:'dirty', limpio:'clean',
  oscuro:'dark', claro:'light/clear', brillante:'bright/brilliant',
  cansado:'tired', cansada:'tired (f)', contento:'happy', triste:'sad',
  enojado:'angry', asustado:'scared', nervioso:'nervous', tranquilo:'calm',
  solo:'alone/only', acompañado:'accompanied', ocupado:'busy',
  libre:'free', listo:'ready/smart', seguro:'safe/sure',
  extraño:'strange/weird', normal:'normal', especial:'special',
  importante:'important', urgente:'urgent', posible:'possible',
  increíble:'incredible', terrible:'terrible', horrible:'horrible',
  hermoso:'beautiful', precioso:'beautiful/precious',
  acogedora:'cozy/welcoming', despejado:'clear (sky)',
  recién:'recently/freshly', horneado:'baked',

  // Adverbs
  bien:'well', mal:'badly', muy:'very', mucho:'a lot', poco:'a little',
  más:'more', menos:'less', tan:'so/as', también:'also', tampoco:'neither',
  ya:'already', todavía:'still', nunca:'never', siempre:'always',
  rápidamente:'quickly', lentamente:'slowly', exactamente:'exactly',
  absolutamente:'absolutely', completamente:'completely',
  afuera:'outside', adentro:'inside', arriba:'up/above', abajo:'down/below',
  cerca:'near', lejos:'far', aquí:'here', allí:'there', allá:'over there',

  // Question/exclamation words
  qué:'what', quién:'who', cómo:'how', dónde:'where',
  cuándo:'when', cuánto:'how much', cuál:'which', por:'why (por qué)',

  // Numbers (common ones)
  uno:'one', dos:'two', tres:'three', cuatro:'four', cinco:'five',
  seis:'six', siete:'seven', ocho:'eight', nueve:'nine', diez:'ten',
  veinte:'twenty', treinta:'thirty', cien:'hundred',
};

// ─── Irregular verb forms → infinitive ───────────────────────────────────────
const VERB_FORMS = {
  // SER
  era:'ser', eras:'ser', éramos:'ser', eran:'ser',
  // IR (pret same as ser)
  fui:'ir/ser', fuiste:'ir/ser', fue:'ir/ser', fuimos:'ir/ser', fueron:'ir/ser',
  // IR imperfect
  iba:'ir', ibas:'ir', íbamos:'ir', iban:'ir',
  // TENER
  tenía:'tener', tenías:'tener', teníamos:'tener', tenían:'tener',
  tuve:'tener', tuviste:'tener', tuvo:'tener', tuvimos:'tener', tuvieron:'tener',
  // ESTAR
  estaba:'estar', estabas:'estar', estábamos:'estar', estaban:'estar',
  estuve:'estar', estuviste:'estar', estuvo:'estar', estuvimos:'estar', estuvieron:'estar',
  // HABER
  había:'haber', habías:'haber', habíamos:'haber', habían:'haber', hubo:'haber',
  // QUERER
  quería:'querer', querías:'querer', queríamos:'querer', querían:'querer',
  quise:'querer', quisiste:'querer', quiso:'querer', quisimos:'querer', quisieron:'querer',
  // SABER
  sabía:'saber', sabías:'saber', sabíamos:'saber', sabían:'saber',
  supe:'saber', supiste:'saber', supo:'saber', supimos:'saber', supieron:'saber',
  // PODER
  podía:'poder', podías:'poder', podíamos:'poder', podían:'poder',
  pude:'poder', pudiste:'poder', pudo:'poder', pudimos:'poder', pudieron:'poder',
  // CONOCER
  conocía:'conocer', conocías:'conocer', conocíamos:'conocer', conocían:'conocer',
  conocí:'conocer', conociste:'conocer', conoció:'conocer', conocimos:'conocer', conocieron:'conocer',
  // HACER
  hacía:'hacer', hacías:'hacer', hacíamos:'hacer', hacían:'hacer',
  hice:'hacer', hiciste:'hacer', hizo:'hacer', hicimos:'hacer', hicieron:'hacer',
  // VER
  veía:'ver', veías:'ver', veíamos:'ver', veían:'ver',
  vi:'ver', viste:'ver', vio:'ver', vimos:'ver', vieron:'ver',
  // DECIR
  decía:'decir', decías:'decir', decíamos:'decir', decían:'decir',
  dije:'decir', dijiste:'decir', dijo:'decir', dijimos:'decir', dijeron:'decir',
  // PONER
  ponía:'poner', ponías:'poner', poníamos:'poner', ponían:'poner',
  puse:'poner', pusiste:'poner', puso:'poner', pusimos:'poner', pusieron:'poner',
  // VENIR
  venía:'venir', venías:'venir', veníamos:'venir', venían:'venir',
  vine:'venir', viniste:'venir', vino:'venir', vinimos:'venir', vinieron:'venir',
  // LEER (spelling change)
  leía:'leer', leías:'leer', leíamos:'leer', leían:'leer',
  leí:'leer', leíste:'leer', leyó:'leer', leímos:'leer', leyeron:'leer',
  // OÍR
  oía:'oír', oías:'oír', oíamos:'oír', oían:'oír',
  oí:'oír', oíste:'oír', oyó:'oír', oímos:'oír', oyeron:'oír',
  // TRAER
  traía:'traer', traías:'traer', traíamos:'traer', traían:'traer',
  traje:'traer', trajiste:'traer', trajo:'traer', trajimos:'traer', trajeron:'traer',
  // DORMIR (stem change in pret 3rd)
  dormía:'dormir', dormías:'dormir', dormíamos:'dormir', dormían:'dormir',
  dormí:'dormir', dormiste:'dormir', durmió:'dormir', dormimos:'dormir', durmieron:'dormir',
  // SENTIR
  sentía:'sentir', sentías:'sentir', sentíamos:'sentir', sentían:'sentir',
  sentí:'sentir', sentiste:'sentir', sintió:'sentir', sentimos:'sentir', sintieron:'sentir',
  // PEDIR
  pedía:'pedir', pedías:'pedir', pedíamos:'pedir', pedían:'pedir',
  pedí:'pedir', pediste:'pedir', pidió:'pedir', pedimos:'pedir', pidieron:'pedir',
  // DAR
  daba:'dar', dabas:'dar', dábamos:'dar', daban:'dar',
  di:'dar', diste:'dar', dio:'dar', dimos:'dar', dieron:'dar',
  // CAER
  caía:'caer', caías:'caer', caíamos:'caer', caían:'caer',
  caí:'caer', caíste:'caer', cayó:'caer', caímos:'caer', cayeron:'caer',
  // SEGUIR
  seguía:'seguir', seguías:'seguir', seguíamos:'seguir', seguían:'seguir',
  seguí:'seguir', seguiste:'seguir', siguió:'seguir', seguimos:'seguir', siguieron:'seguir',
  // REÍR
  reía:'reír', reías:'reír', reíamos:'reír', reían:'reír',
  reí:'reír', reíste:'reír', rió:'reír', reímos:'reír', rieron:'reír',
  // CRECER
  crecía:'crecer', crecías:'crecer', crecíamos:'crecer', crecían:'crecer',
  crecí:'crecer', creciste:'crecer', creció:'crecer', crecimos:'crecer', crecieron:'crecer',
  // CONDUCIR
  conducía:'conducir', conducías:'conducir', conducíamos:'conducir', conducían:'conducir',
  conduje:'conducir', condujiste:'conducir', condujo:'conducir', condujimos:'conducir', condujeron:'conducir',
  // NACER
  nacía:'nacer', nacías:'nacer', nacíamos:'nacer', nacían:'nacer',
  nací:'nacer', naciste:'nacer', nació:'nacer', nacimos:'nacer', nacieron:'nacer',
};

// Infinitive → English translation
const VERB_TRANSLATIONS = {
  ser:'to be (permanent)', estar:'to be (state/location)', haber:'to have (aux)',
  ir:'to go', venir:'to come', tener:'to have', hacer:'to do/make',
  poder:'to be able/can', querer:'to want/love', saber:'to know',
  conocer:'to know (person/place)', decir:'to say/tell', ver:'to see/watch',
  poner:'to put/place', traer:'to bring', dar:'to give', caer:'to fall',
  leer:'to read', oír:'to hear', seguir:'to follow/continue', reír:'to laugh',
  conducir:'to drive', crecer:'to grow', nacer:'to be born',
  estudiar:'to study', dormir:'to sleep', hablar:'to talk/speak',
  llover:'to rain', correr:'to run', cocinar:'to cook', trabajar:'to work',
  cantar:'to sing', escribir:'to write', jugar:'to play', pensar:'to think',
  esperar:'to wait/hope', caminar:'to walk', manejar:'to drive (LatAm)',
  duchar:'to shower', mirar:'to look/watch', buscar:'to look for',
  comer:'to eat', beber:'to drink', llegar:'to arrive', salir:'to leave/go out',
  entrar:'to enter', tocar:'to play (music)/touch', viajar:'to travel',
  levantarse:'to get up', escuchar:'to listen', decidir:'to decide',
  empezar:'to start', terminar:'to finish', ganar:'to win/earn',
  preparar:'to prepare', abrir:'to open', llamar:'to call', comprar:'to buy',
  despertar:'to wake up', oler:'to smell', sentirse:'to feel', sonar:'to sound/ring',
  llevar:'to carry/wear', parecer:'to seem', costar:'to cost', vivir:'to live',
  encontrar:'to find/meet', nadar:'to swim', bailar:'to dance',
  descansar:'to rest', cenar:'to have dinner', desayunar:'to have breakfast',
  almorzar:'to have lunch', rezar:'to pray', pasar:'to pass/spend time',
  visitar:'to visit', ayudar:'to help', olvidar:'to forget',
  recordar:'to remember', necesitar:'to need', usar:'to use',
  vender:'to sell', comprender:'to understand', aprender:'to learn',
  enseñar:'to teach', explicar:'to explain', preguntar:'to ask',
  contestar:'to answer', responder:'to respond', gritar:'to shout/yell',
  llorar:'to cry', reír:'to laugh', sonreír:'to smile',
  cortar:'to cut', romper:'to break', perder:'to lose/miss',
  gastar:'to spend (money)', ahorrar:'to save (money)',
  limpiar:'to clean', lavar:'to wash', planchar:'to iron',
  pintar:'to paint', dibujar:'to draw', construir:'to build',
  arreglar:'to fix/arrange', cambiar:'to change', mejorar:'to improve',
  subir:'to go up/upload', bajar:'to go down/download',
  abrir:'to open', cerrar:'to close', encender:'to turn on',
  apagar:'to turn off', mover:'to move', llenar:'to fill',
  vaciar:'to empty', pagar:'to pay', cobrar:'to charge/collect',
  nadar:'to swim', correr:'to run', saltar:'to jump', golpear:'to hit',
  empujar:'to push', jalar:'to pull', cargar:'to carry/load',
  sentar:'to sit', parar:'to stop', continuar:'to continue',
  volver:'to return', regresar:'to return', quedarse:'to stay/remain',
  irse:'to leave/go away', llegarse:'to arrive',
};

// ─── Regular ending patterns (longest first to avoid greedy mistakes) ─────────
const REGULAR_PATTERNS = [
  // AR imperfect
  { ending:'ábamos', type:'ar' }, { ending:'abais', type:'ar' },
  { ending:'abas', type:'ar' },   { ending:'aban', type:'ar' },
  { ending:'aba', type:'ar' },
  // ER/IR imperfect
  { ending:'íamos', type:'erir' }, { ending:'íais', type:'erir' },
  { ending:'ías', type:'erir' },   { ending:'ían', type:'erir' },
  { ending:'ía', type:'erir' },
  // AR preterite
  { ending:'asteis', type:'ar' }, { ending:'amos', type:'ar' },
  { ending:'aste', type:'ar' },   { ending:'aron', type:'ar' },
  { ending:'ó', type:'ar' },      { ending:'é', type:'ar' },
  // ER/IR preterite
  { ending:'isteis', type:'erir' }, { ending:'imos', type:'erir' },
  { ending:'iste', type:'erir' },   { ending:'ieron', type:'erir' },
  { ending:'ió', type:'erir' },     { ending:'í', type:'erir' },
];

function tryRegularStem(word) {
  for (const { ending, type } of REGULAR_PATTERNS) {
    if (word.endsWith(ending)) {
      const stem = word.slice(0, -ending.length);
      if (stem.length < 2) continue;
      if (type === 'ar') return [stem + 'ar'];
      if (type === 'erir') return [stem + 'er', stem + 'ir'];
    }
  }
  return [];
}

// ─── Main lookup ──────────────────────────────────────────────────────────────
export function lookupWord(raw) {
  if (!raw) return null;
  const word = raw.toLowerCase().replace(/[¿?¡!.,;:"'()\[\]«»]/g, '');
  if (!word) return null;

  // 1. Direct dictionary hit (nouns, adj, adverbs, articles, etc.)
  if (WORD_MAP[word]) return WORD_MAP[word];

  // 2. Explicit irregular conjugation → infinitive → translation
  if (VERB_FORMS[word]) {
    const inf = VERB_FORMS[word];
    const trans = VERB_TRANSLATIONS[inf];
    return trans ? `${inf} — ${trans}` : inf;
  }

  // 3. Try stripping regular endings
  const candidates = tryRegularStem(word);
  for (const inf of candidates) {
    if (VERB_TRANSLATIONS[inf]) {
      return `${inf} — ${VERB_TRANSLATIONS[inf]}`;
    }
  }

  // 4. Check if raw is itself a known infinitive
  if (VERB_TRANSLATIONS[word]) return VERB_TRANSLATIONS[word];

  return null;
}

export default WORD_MAP;
