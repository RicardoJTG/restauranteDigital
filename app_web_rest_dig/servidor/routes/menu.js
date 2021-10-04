import express from 'express';
const router = express.Router();

import Menu from '../models/menu';
import Factura from '../models/factura';

//Agregar una factura
router.post('/factura-nuevo', async (req,res) => {
    const body = req.body;
    try {
        const facturadb = await Factura.create(body);
        res.status(200).json(facturadb);
    } catch (error) {
        return res.status(500).json({
            mensaje: 'Ocurrió un error',
            error
        });
    }
});

//Agregar un menu
router.post('/menu-nuevo', async (req,res) => {
    const body = req.body;
    try {
        const menudb = await Menu.create(body);
        res.status(200).json(menudb);
    } catch (error) {
        return res.status(500).json({
            mensaje: 'Ocurrió un error',
            error
        });
    }
});

router.get('/menu/:id', async(req,res) => {
    const _id = req.params.id;
    try {
        const menudb = await Menu.findOne({_id});
        res.json(menudb);
    } catch (error) {
        return res.status(500).json({
            mensaje: 'Ocurrió un error',
            error
        });
    }
});

router.get('/menu', async(req,res) => {
    try {
        const menudb = await Menu.find();
        res.json(menudb);
    } catch (error) {
        return res.status(500).json({
            mensaje: 'Ocurrió un error',
            error
        });
    }
});

router.delete('/menu/:id', async (req,res) => {
    const _id = req.params.id;
    try {
        const menudb = await Menu.findByIdAndDelete({_id});
        if (!menudb) {
            return res.status(400).json({
                mensaje: 'No se encontró el id indicado',
                error
            });
        }
        res.json(menudb);
    } catch (error) {
        return res.status(500).json({
            mensaje: 'Ocurrió un error',
            error
        });
    }
});

router.put('/menu/:id', async(req, res) => {
    const _id = req.params.id;
    const body = req.body;
    try {
        const menudb = await Menu.findByIdAndUpdate(
            _id,
            body,
            {new: true}
        );
        res.json(menudb);
    } catch (error) {
        return res.status(400).json({
            mensaje: 'Ocurrio un error',
            error
        })
    }
});

module.exports = router;