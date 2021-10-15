import express from 'express';
const router = express.Router();

import Factura from '../models/factura';

//Agregar una factura
router.post('/factura-nuevo', async (req,res) => {
    const body = req.body;
    try {
        const facturaDB = await Factura.create(body);
        res.status(200).json(facturaDB);
    } catch (error) {
        return res.status(500).json({
            mensaje: 'Ocurrió un error',
            err
        });
    }
});

module.exports = router;