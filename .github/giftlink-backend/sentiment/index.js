// Importar el paquete natural
const natural = require('natural');

// Inicializar el analizador de sentimientos
const SentimentAnalyzer = natural.SentimentAnalyzer;
const stemmer = natural.PorterStemmer;

// Crear una instancia del analizador de sentimientos
const sentimentAnalyzer = new SentimentAnalyzer('English', stemmer, 'afinn');

// Función para analizar el sentimiento de un texto
const analyzeSentiment = (text) => {
    const score = sentimentAnalyzer.getSentiment(text.split(' '));
    return score;
};

// Exportar la función para uso externo
module.exports = {
    analyzeSentiment,
};
