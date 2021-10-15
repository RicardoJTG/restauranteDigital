import express from "express";
const router=express.Router();

import Usuarios from "../models/usuarios"

//Agregar una nota

router.post("/nuevo-usuario", async (req, res)=>{

    const body=req.body;

    try {

        const usuariosDB= await Usuarios.create(body);
        res.status(200).json(usuariosDB);

    } catch (error) {

            return res.status(500).json({

                mensaje: "Ocurrio un error",
                err
            })


    }


});


router.get("/usuarios/:id", async(req,res)=>{

    const _id=req.params.id;

    try {

        const usuariosDB=await Usuarios.findOne({_id});
        res.json(usuariosDB);


    } catch (error) {

        return res.status(500).json({

            mensaje: "Ocurrio un error",
            err
        })
    }






});

router.get("/usuarios",async(req,res)=>{

    try {
        
        const usuariosDB=await Usuarios.find();

        res.json(usuariosDB);

    } catch (error) {
        return res.status(500).json({

            mensaje: "Ocurrio un error",
            err

        })
    }


});


router.delete("/usuarios/:id", async(req,res)=>{

    const _id=req.params.id;
    try {

        
        const usuariosDB=await Usuarios.findByIdAndDelete({_id});

        if(!usuariosDB)
        {
                return res.status(400).json({
                    mensaje: 'No se encontró el id indicado', error})
                }
        res.json(usuariosDB); 
        

    } catch (err) {
       
        return res.status(500).json({

            mensaje: "Ocurrio un error",
            err

        })
        
    }



});

router.put('/usuarios/:id', async(req, res) => {
    const _id = req.params.id;
    const body = req.body;
    try {
        const usuariosDB = await Usuarios.findByIdAndUpdate(
        _id, body, {new: true});
        res.json(usuariosDB);
    } catch (error) {
        return res.status(400).json({
            mensaje: 'Ocurrio un error', error})
        }
   });

module.exports = router;