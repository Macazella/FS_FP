const express = require('express');
const router = express.Router();
const User = require('../models/User'); // Asegúrate de ajustar la ruta al modelo de usuario

// Ruta para obtener el usuario actual
router.get('/current', async (req, res) => {
    try {
        const userId = req.user.id; // Suponiendo que estás usando algún middleware para establecer req.user
        const user = await User.collection.findOne({ _id: userId });

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.json(user);
    } catch (error) {
        console.error('Error retrieving user:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

module.exports = router;
