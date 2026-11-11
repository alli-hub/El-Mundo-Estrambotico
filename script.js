const seresDatabase = {
    "indigos":{
        origen: "No provienen de un planeta o sistema estelar específico, sino que definen a una generación de almas que comenzó a encarnar masivamente en la Tierra a partir de las décadas de 1970 y 1980." , 
        caracteristicas: " Son almas altamente intuitivas, con un gran sentido de la justicia, baja tolerancia a la hipocresía y una tendencia natural a cuestionar la autoridad y los sistemas tradicionales.",
        razon: "Desmantelar sistemas sociales, educativos y políticos obsoletos o corruptos" ,
        proposito: "Abren el camino para la llegada de paradigmas basados en la verdad, la autenticidad y la innovación."
    },
    "paladorianos":{
        origen:"Linajes de seres fundadores y arquitectos cósmicos muy antiguos, vinculados en la mitología esotérica con la creación de las razas raíz y la preservación de las plantillas originales de la humanidad (a menudo asociados con la Esfera de Amenti).",
        caracteristicas:"Conciencia de densidades muy elevadas, portadores de los códigos genéticos originales de la forma humana angélica (Turaneusiam).",
        razon:"Proteger la evolución del ADN humano, restaurar el diseño original de la conciencia tras los quiebres históricos ",
        proposito:"Participar en los pactos de rescate evolutivo (Activaciones Paladorianas) para asegurar que la humanidad recupere su soberanía multidimensional."
    },
  "andromedianos": {
    origen: "Originarios de la Galaxia de Andrómeda (la galaxia espiral vecina más cercana a la Vía Láctea).",
    caracteristicas: "Conciencia sumamente expansiva y fluida.",
    razon: "Fomentar la libertad absoluta, la soberanía espiritual y la cooperación universal.",
      proposito: "Su misión principal es romper estructuras mentales rígidas y enseñar a vivir en armonía cósmica."
  },
  "arcturianos": {
    origen: "Estrella Arcturus (Constelación de Boyero)",
    caracteristicas: "Seres de avanzada inteligencia geométrica y espiritual, expertos en tecnología de luz.",
    razon: "Supervisar el equilibrio energético de la Tierra y proteger el planeta.",
    proposito: "Facilitar la sanación cuántica y la reestructuración del ADN."
  },
  "sirianos": {
    origen: "Sistema Estelar Sirio A y B",
    caracteristicas: "Seres sabios vinculados al conocimiento ancestral, las aguas y la geometría.",
    razon: "Anclar sabiduría mística desde civilizaciones antiguas como el Antiguo Egipto.",
    proposito: "Guardar registros akásicos y transmitir conocimientos arquitectónicos."
  }
};

const starForm = document.getElementById('starForm');
const starInput = document.getElementById('starInput');
const resultContainer = document.getElementById('resultContainer');
const beingName = document.getElementById('beingName');
const beingOrigin = document.getElementById('beingOrigin');
const beingFeatures = document.getElementById('beingFeatures');
const beingReason = document.getElementById('beingReason');
const beingPurpose = document.getElementById('beingPurpose');

starForm.addEventListener('submit', function(e) {
  e.preventDefault();
  
  const rawQuery = starInput.value.trim();
  const query = rawQuery.toLowerCase();
  const nombreCapitalizado = rawQuery.charAt(0).toUpperCase() + rawQuery.slice(1);
    
  let info = seresDatabase[query];
    
  if (!info) {
    info = {
      origen: `Región estelar de ${nombreCapitalizado}`,
      caracteristicas: "Seres con alta vibración energética y patrones de luz sutil.",
      razon: "Aportar códigos de armonía y resonancia durante el cambio de era.",
      proposito: "Guiar el despertar de talentos latentes y la unidad cósmica."
    };
  }
    
  beingName.textContent = nombreCapitalizado;
  beingOrigin.textContent = info.origen;
  beingFeatures.textContent = info.caracteristicas;
  beingReason.textContent = info.razon;
  beingPurpose.textContent = info.proposito;
    
  resultContainer.classList.remove('hidden');
});
