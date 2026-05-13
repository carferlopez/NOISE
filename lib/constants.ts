import { Protocol, Trend } from './types'

export const FREE_DAILY_LIMIT = 5

export const PROTOCOLS: Protocol[] = [
  {
    id: 'exercise',
    title: 'Ejercicio',
    icon: '🏋️',
    description: 'Lo mínimo que la ciencia respalda para estar en forma y vivir más.',
    minimumDose: [
      '150 minutos/semana de actividad moderada (caminar rápido cuenta)',
      '2 sesiones de fuerza/semana (sentadilla, peso muerto, press, remo)',
      'No estar sentado más de 1 hora seguida',
      '7.000-10.000 pasos/día como base',
    ],
    ignoreList: [
      '"Necesitas hacer HIIT 5 veces/semana" → No. 2 veces es suficiente.',
      '"El cardio en ayunas quema más grasa" → No hay diferencia significativa.',
      '"Necesitas una rutina de 15 ejercicios" → 4-6 compuestos bastan.',
      '"Si no duele, no funciona" → Dolor ≠ progreso. Consistencia = progreso.',
      '"Las máquinas no sirven" → Sirven igual que el peso libre para hipertrofia.',
    ],
    evidenceScore: 10,
  },
  {
    id: 'nutrition',
    title: 'Nutrición',
    icon: '🥗',
    description: 'Olvida dietas mágicas. Esto es lo que la evidencia dice de verdad.',
    minimumDose: [
      'Come comida real. Principalmente plantas. No demasiado. (Michael Pollan)',
      'Proteína suficiente: 1.6-2.2g/kg si entrenas fuerza',
      'Frutas y verduras: mínimo 5 raciones/día',
      'Minimiza ultraprocesados (no elimines, minimiza)',
      'Bebe agua cuando tengas sed. No hay un número mágico de vasos.',
    ],
    ignoreList: [
      '"Los carbohidratos son el enemigo" → No. Son tu fuente de energía principal.',
      '"Necesitas hacer detox" → Tu hígado y riñones ya hacen detox 24/7.',
      '"El gluten es malo para todos" → Solo si eres celíaco o sensible diagnosticado.',
      '"Comer grasa te hace engordar" → El exceso calórico te hace engordar.',
      '"Necesitas superalimentos" → No existe el superalimento. Come variado.',
    ],
    evidenceScore: 9,
  },
  {
    id: 'sleep',
    title: 'Sueño',
    icon: '😴',
    description: 'El hábito más infravalorado. Más importante que cualquier suplemento.',
    minimumDose: [
      'Duerme 7-9 horas. No negociable.',
      'Misma hora de dormir y despertar (±30 min), incluso fines de semana',
      'Habitación oscura, fresca (18-20°C) y silenciosa',
      'No pantallas 30-60 min antes de dormir (o usa filtro azul)',
      'No cafeína después de las 14:00',
    ],
    ignoreList: [
      '"Puedo dormir 5h y rendir igual" → No. Estás acumulando deuda de sueño.',
      '"Los suplementos de melatonina son imprescindibles" → Solo útiles para jet lag.',
      '"Madrugar es superior" → Lo importante es la regularidad, no la hora.',
      '"Puedo recuperar sueño el fin de semana" → No funciona así.',
    ],
    evidenceScore: 10,
  },
  {
    id: 'mental',
    title: 'Salud Mental',
    icon: '🧠',
    description: 'Lo mínimo efectivo para tu cabeza, según la ciencia.',
    minimumDose: [
      '10 minutos/día de meditación o respiración consciente',
      'Exposición a naturaleza: 120 min/semana (2h, repartidas)',
      'Conexión social real: conversaciones significativas, no likes',
      'Limitar redes sociales a 30 min/día',
      'Escribir/journaling: 5 minutos al día',
    ],
    ignoreList: [
      '"Necesitas retiros de 10 días" → 10 min diarios ya tienen efecto medible.',
      '"Las apps de meditación son imprescindibles" → Sentarte en silencio funciona igual.',
      '"Pensar en positivo cura todo" → La positividad tóxica es contraproducente.',
      '"Necesitas un coach de vida" → Empieza por hábitos simples y terapia si la necesitas.',
    ],
    evidenceScore: 8,
  },
  {
    id: 'supplements',
    title: 'Suplementos',
    icon: '🧪',
    description: 'El 95% son innecesarios. Estos son los pocos que la ciencia respalda.',
    minimumDose: [
      'Vitamina D: si vives en latitud norte o no tomas sol (analítica primero)',
      'Omega-3 (EPA/DHA): si no comes pescado azul 2-3 veces/semana',
      'Creatina monohidrato: 3-5g/día (décadas de evidencia, segura)',
      'Proteína en polvo: solo si no llegas con comida real',
      'Eso es TODO. El resto no tiene evidencia suficiente.',
    ],
    ignoreList: [
      '"Necesitas un multivitamínico" → Come variado y no necesitarás ninguno.',
      '"La glutamina mejora la recuperación" → Evidencia muy débil.',
      '"Los BCAAs son esenciales" → Si comes suficiente proteína, son redundantes.',
      '"Los quemagrasa funcionan" → No. Ahórrate el dinero.',
      '"El colágeno rejuvenece" → Tu cuerpo lo descompone en aminoácidos como cualquier proteína.',
    ],
    evidenceScore: 9,
  },
]

export const TRENDS: Trend[] = [
  {
    id: 'carnivore',
    name: 'Dieta Carnívora',
    noiseScore: 2,
    verdict: 'low',
    oneLiner: 'Poca evidencia a largo plazo. Riesgos cardiovasculares y de microbiota.',
  },
  {
    id: 'creatine',
    name: 'Creatina Monohidrato',
    noiseScore: 9,
    verdict: 'high',
    oneLiner: 'Décadas de estudios. Segura, barata, funciona para fuerza y cognición.',
  },
  {
    id: 'lemon-water',
    name: 'Agua con limón en ayunas',
    noiseScore: 1,
    verdict: 'low',
    oneLiner: 'Cero evidencia de beneficios. Es agua con sabor. Nada más.',
  },
  {
    id: 'strength',
    name: 'Entrenamiento de Fuerza',
    noiseScore: 10,
    verdict: 'high',
    oneLiner: 'El tipo de ejercicio con más evidencia para salud y longevidad.',
  },
  {
    id: 'detox',
    name: 'Detox / Jugos de limpieza',
    noiseScore: 0,
    verdict: 'low',
    oneLiner: 'Tu hígado y riñones ya hacen detox. Esto es marketing puro.',
  },
  {
    id: 'meditation',
    name: 'Meditación',
    noiseScore: 8,
    verdict: 'high',
    oneLiner: 'Evidencia sólida para reducción de estrés, ansiedad y mejora cognitiva.',
  },
  {
    id: 'grounding',
    name: 'Earthing / Grounding',
    noiseScore: 1,
    verdict: 'low',
    oneLiner: 'Estudios de muy baja calidad. Caminar descalzo está bien, pero no cura nada.',
  },
  {
    id: 'cold-exposure',
    name: 'Exposición al frío',
    noiseScore: 5,
    verdict: 'medium',
    oneLiner: 'Evidencia moderada para inflamación y ánimo. Exagerada por influencers.',
  },
  {
    id: 'IF',
    name: 'Ayuno Intermitente',
    noiseScore: 6,
    verdict: 'medium',
    oneLiner: 'Funciona para control calórico. No es mágico. Es una herramienta más.',
  },
  {
    id: 'protein',
    name: 'Proteína alta (>1.6g/kg)',
    noiseScore: 9,
    verdict: 'high',
    oneLiner: 'Esencial para masa muscular y saciedad. Muy bien respaldado.',
  },
  {
    id: 'keto',
    name: 'Dieta Keto',
    noiseScore: 4,
    verdict: 'medium',
    oneLiner: 'Útil para epilepsia. Para perder peso, no superior a otras dietas con mismo déficit.',
  },
  {
    id: 'seed-oils',
    name: '"Los aceites de semillas son veneno"',
    noiseScore: 2,
    verdict: 'low',
    oneLiner: 'Narrativa de redes sociales. La evidencia no respalda que sean tóxicos.',
  },
]

export const SYSTEM_PROMPT = `Eres NOISE, un analizador de evidencia científica en salud, nutrición y ejercicio.

Tu misión: separar la SEÑAL del RUIDO. Decir qué funciona según la ciencia y qué es BS.

PRINCIPIOS INQUEBRANTABLES:
1. Solo valoras evidencia de nivel alto: metaanálisis, revisiones sistemáticas, ensayos clínicos aleatorizados (RCTs).
2. Si la evidencia es débil, contradictoria o solo basada en estudios observacionales, lo dices CLARO.
3. Siempre das la DOSIS MÍNIMA EFECTIVA: lo mínimo que funciona según la evidencia.
4. NUNCA das consejo médico. Informas. No eres médico. Si algo requiere atención médica, lo dices.
5. Lenguaje claro, directo, sin tecnicismos innecesarios. Como explicarle a un amigo inteligente.
6. Si algo es BS, lo dices sin rodeos pero con respeto. No insultas a quien pregunte.
7. Eres honesto con la incertidumbre. "No lo sabemos aún" es una respuesta válida.

REGLA CRÍTICA SOBRE FUENTES:
- USA la herramienta web_search para encontrar fuentes reales y verificables antes de responder.
- Prioriza fuentes primarias: PubMed, Cochrane, NIH, NEJM, JAMA, BMJ, The Lancet, revisiones sistemáticas.
- Cita SOLO estudios cuya URL hayas confirmado vía búsqueda. La URL debe ser de la fuente real, no un blog que la cite.
- Si web_search no devuelve fuentes relevantes y verificables, devuelve "sources": [] (array vacío). Es preferible no citar a citar falso.
- NUNCA inventes títulos, autores, journals, DOIs ni URLs. La credibilidad del producto depende de esto.

ESCALA DE EVIDENCIA (siempre incluir):
- 🔴 1-3/10: Poca o nula evidencia / Contradicho por estudios de calidad
- 🟡 4-6/10: Evidencia mixta, preliminar o solo en modelos animales
- 🟢 7-9/10: Evidencia sólida y consistente en humanos
- 🟢 10/10: Consenso científico establecido

PROCESO:
1. Si la afirmación requiere evidencia específica, USA web_search (hasta 3 búsquedas) para localizar estudios reales.
2. Tu respuesta final debe ser ÚNICAMENTE un objeto JSON válido con este formato exacto:

{
  "verdict": "Una frase corta con el veredicto",
  "emoji": "🔴 o 🟡 o 🟢",
  "evidenceLevel": "high" | "medium" | "low",
  "evidenceScore": número del 0 al 10,
  "explanation": "2-3 párrafos explicando qué dice la ciencia. Claro y directo.",
  "minimumDose": "Qué hacer concretamente. La dosis mínima efectiva.",
  "sources": [{"title": "Título exacto del estudio o revisión", "url": "URL completa verificada vía web_search"}],
  "bullshitFactors": ["Factor BS 1 que se suele decir y es falso", "Factor BS 2"]
}

La respuesta final debe ser SOLO el JSON. Sin markdown, sin texto antes o después.`
