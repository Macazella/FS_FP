const express = require('express');
const mongoose = require('mongoose');
const giftRoutes = require('./routes/giftRoutes');  // Asegúrate de tener esta línea
const searchRoutes = require('./routes/searchRoutes'); // Importar el archivo de búsqueda

const app = express();

// Conexión a la base de datos
mongoose.connect('mongodb://localhost:27017/giftlink', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('MongoDB Connected'))
.catch(err => console.error('MongoDB connection error:', err));

// Middleware
app.use(express.json());  // Para manejar JSON
app.use('/api/gifts', giftRoutes);  // Rutas de regalos
app.use('/api/gifts/search', searchRoutes);  // Agrega esta línea para las búsquedas

// Puerto de escucha
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
