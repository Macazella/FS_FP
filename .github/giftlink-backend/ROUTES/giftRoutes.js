const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();

// Conexión a la base de datos
mongoose.connect('mongodb://localhost:27017/giftlink', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('MongoDB Connected'))
.catch(err => console.error('MongoDB connection error:', err));

// Definición de un modelo (ejemplo)
const Gift = mongoose.model('Gift', new mongoose.Schema({
    name: String,
    value: Number,
}));

// Ruta para obtener todos los regalos
router.get('/gifts', async (req, res) => {
    try {
        const gifts = await Gift.find();
        res.json(gifts);
    } catch (err) {
        res.status(500).send(err);
    }
});

// Ruta para obtener un regalo específico por ID
router.get('/gifts/:id', async (req, res) => {
    try {
        const gift = await Gift.findById(req.params.id);
        if (!gift) {
            return res.status(404).send('Gift not found');
        }
        res.json(gift);
    } catch (err) {
        res.status(500).send(err);
    }
});

// Exportar las rutas
module.exports = router;
