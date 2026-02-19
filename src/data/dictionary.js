// Spanish → English word-level translations for exercise sentences
const dict = {
  // Articles & determiners
  el: 'the', la: 'the', los: 'the', las: 'the',
  un: 'a', una: 'a', unos: 'some', unas: 'some',
  este: 'this', esta: 'this', ese: 'that', esa: 'that',
  mi: 'my', mis: 'my', tu: 'your', su: 'his/her/their', sus: 'his/her/their',
  nuestro: 'our', nuestra: 'our', nuestros: 'our', nuestras: 'our',

  // Conjunctions & connectors
  cuando: 'when', y: 'and', pero: 'but', porque: 'because',
  que: 'that/which', si: 'if', aunque: 'although',
  después: 'after/then', antes: 'before', mientras: 'while',
  como: 'as/like/how', donde: 'where', mientras: 'while',
  luego: 'then/later', entonces: 'then/so', así: 'so/thus',
  finalmente: 'finally', primero: 'first', ya: 'already/now',
  de: 'of/from', desde: 'since/from', hasta: 'until/up to',
  por: 'for/by/through', para: 'for/in order to',
  en: 'in/on/at', con: 'with', sin: 'without', sobre: 'about/on',
  a: 'to/at', al: 'to the', del: 'of the',
  o: 'or', ni: 'neither/nor',

  // Time expressions
  ayer: 'yesterday', hoy: 'today', mañana: 'tomorrow',
  siempre: 'always', nunca: 'never', veces: 'times',
  tarde: 'afternoon/late', noche: 'night', mañana: 'morning/tomorrow',
  año: 'year', años: 'years', verano: 'summer', veranos: 'summers',
  navidad: 'Christmas', fin: 'end/weekend',
  semana: 'week', pasado: 'past/last', pasada: 'last',
  momento: 'moment', rato: 'a while', ahora: 'now',
  horas: 'hours', hora: 'hour', tiempo: 'time/weather',
  día: 'day', días: 'days', noche: 'night', noches: 'nights',
  tarde: 'afternoon/evening', mañana: 'morning', semanas: 'weeks',
  repente: 'sudden', pronto: 'soon', aquel: 'that (over there)',
  entonces: 'then/at that time',

  // Common verbs (infinitives)
  estudiar: 'to study', dormir: 'to sleep', hablar: 'to talk/speak',
  llover: 'to rain', correr: 'to run', cocinar: 'to cook',
  trabajar: 'to work', leer: 'to read', cantar: 'to sing',
  escribir: 'to write', jugar: 'to play', pensar: 'to think',
  esperar: 'to wait/hope', caminar: 'to walk', manejar: 'to drive',
  ducharse: 'to shower', hacer: 'to do/make', mirar: 'to look/watch',
  buscar: 'to look for', ver: 'to see/watch', ir: 'to go',
  venir: 'to come', comer: 'to eat', beber: 'to drink',
  llegar: 'to arrive', salir: 'to leave/go out', entrar: 'to enter',
  tocar: 'to play (music)/touch', viajar: 'to travel',
  levantarse: 'to get up', escuchar: 'to listen', decidir: 'to decide',
  nacer: 'to be born', empezar: 'to start/begin', terminar: 'to finish',
  ganar: 'to win/earn', preparar: 'to prepare', abrir: 'to open',
  llamar: 'to call', comprar: 'to buy', despertar: 'to wake up',
  oler: 'to smell', sentirse: 'to feel', sonar: 'to sound/ring',
  llevar: 'to carry/wear', parecer: 'to seem', costar: 'to cost',
  vivir: 'to live', encontrar: 'to find/meet',

  // Conjugated forms (common)
  llamé: 'I called', llamó: 'called', llamamos: 'we called',
  sonó: 'rang/sounded', entró: 'entered', entré: 'I entered',
  llegué: 'I arrived', llegó: 'arrived', llegamos: 'we arrived',
  llegaron: 'arrived', fue: 'went/was', fui: 'I went/was',
  fuimos: 'we went', fueron: 'went', vi: 'I saw', vio: 'saw',
  vimos: 'we saw', vieron: 'saw', dije: 'I said', dijo: 'said',
  empezó: 'started/began', empezaron: 'started',
  avisaron: 'they told/warned', se: 'himself/herself/themselves',
  me: 'me/myself', te: 'you/yourself', nos: 'us/ourselves',
  le: 'him/her', les: 'them', lo: 'it/him', la: 'her/it',

  // Nouns
  teléfono: 'phone', cuarto: 'room/bedroom', hermano: 'brother',
  hermana: 'sister', parque: 'park', mamá: 'mom', madre: 'mother',
  padre: 'father', papá: 'dad', alarma: 'alarm', jardín: 'garden',
  accidente: 'accident', libro: 'book', ruido: 'noise',
  chica: 'girl', escenario: 'stage', luz: 'light',
  email: 'email', correo: 'mail/email', jefe: 'boss',
  oficina: 'office', patio: 'yard/patio', mensaje: 'message',
  autobús: 'bus', aguacero: 'downpour/heavy rain', calle: 'street',
  ex: 'ex (partner)', policía: 'police', agua: 'water',
  tarea: 'homework/task', fiesta: 'party', ventana: 'window',
  llaves: 'keys', fútbol: 'soccer/football', noche: 'night',
  misa: 'mass (church)', película: 'movie', películas: 'movies',
  guitarra: 'guitar', universidad: 'university', medianoche: 'midnight',
  rock: 'rock (music)', adolescente: 'teenager', cuento: 'story/tale',
  tamales: 'tamales', supermercado: 'supermarket', taxi: 'taxi',
  aeropuerto: 'airport', hotel: 'hotel', vestuario: 'locker room',
  París: 'Paris', Europa: 'Europe', presentación: 'presentation',
  conferencia: 'conference', hospital: 'hospital', urgencias: 'emergency room',
  carta: 'letter', sobre: 'envelope/about', maratón: 'marathon',
  botella: 'bottle', caja: 'box', partido: 'game/match',
  equipo: 'team', clase: 'class/classroom', cocina: 'kitchen',
  pueblo: 'town/village', calles: 'streets', club: 'club',
  entrevista: 'interview', gasolina: 'gasoline/gas', guerra: 'war',
  casa: 'house/home', apartamento: 'apartment', música: 'music',
  café: 'coffee', niño: 'boy/child', niños: 'children',
  niña: 'girl', amigo: 'friend', amiga: 'friend (f)',
  profesora: 'teacher (f)', profesor: 'teacher', abuela: 'grandmother',
  abuelos: 'grandparents', tío: 'uncle', padres: 'parents',

  // Adjectives & descriptors
  joven: 'young', pequeño: 'small/little', pequeña: 'small/little',
  solo: 'alone/only', caliente: 'hot/warm', frío: 'cold', frío: 'cold',
  cansada: 'tired (f)', cansado: 'tired', rojo: 'red', roja: 'red',
  fuerte: 'strong/loud', poco: 'little/few', mucho: 'a lot/much',
  muchos: 'many', acogedora: 'cozy/welcoming', despejado: 'clear (sky)',
  recién: 'freshly/recently', horneado: 'baked', extraño: 'strange',
  nervioso: 'nervous', nerviosa: 'nervous (f)', rápido: 'fast/quick',
  importante: 'important', histórico: 'historical',

  // Prepositions & phrases
  por: 'for/by/per', para: 'for/in order to', después: 'after',
  antes: 'before', durante: 'during', entre: 'between/among',
  contra: 'against', hacia: 'towards', según: 'according to',
  sin: 'without', sobre: 'on/about', bajo: 'under/below',
  detrás: 'behind', delante: 'in front',

  // Question words
  qué: 'what', quién: 'who', cómo: 'how', dónde: 'where',
  cuándo: 'when', cuánto: 'how much', cuál: 'which',

  // Common phrases
  de: 'of/from', repente: 'sudden(ly)', vez: 'time (instance)',
  tres: 'three', dos: 'two', diez: 'ten', seis: 'six',
  todo: 'all/every', todos: 'all/everyone', toda: 'all/entire',
  cada: 'each/every', nadie: 'nobody/no one', nada: 'nothing',
  algo: 'something', alguien: 'someone', cualquier: 'any',
  mismo: 'same/himself', misma: 'same/herself',
};

export function lookupWord(word) {
  if (!word) return null;
  // Strip punctuation and normalize
  const clean = word.toLowerCase().replace(/[¿?¡!.,;:"""'()\[\]]/g, '');
  return dict[clean] || null;
}

export default dict;
