import express from "express";
const router=express.Router();

import Menu from "../models/menu"

//Agregar un menu

router.post("/nuevo-menu", async (req, res)=>{

    const body=req.body;

    try {

        const menuDB= await Menu.create(body);
        res.status(200).json(menuDB);

    } catch (error) {

            return res.status(500).json({

                mensaje: "Ocurrio un error",
                err
            })


    }


});


router.get("/menu/:id", async(req,res)=>{

    const _id=req.params.id;

    try {

        const menuDB=await Menu.findOne({_id});
        res.json(menuDB);


    } catch (error) {

        return res.status(500).json({

            mensaje: "Ocurrio un error",
            err
        })
    }






});

router.get("/menu",async(req,res)=>{

    try {
        
        const menuDB=await Menu.find();

        res.json(menuDB);

    } catch (error) {
        return res.status(500).json({

            mensaje: "Ocurrio un error",
            err

        })
    }


});


router.delete("/menu/:id", async(req,res)=>{

    const _id=req.params.id;
    try {

        
        const menuDB=await Menu.findByIdAndDelete({_id});

        if(!menuDB)
        {
                return res.status(400).json({
                    mensaje: 'No se encontró el id indicado', error})
                }
        res.json(menuDB); 
        

    } catch (err) {
       
        return res.status(500).json({

            mensaje: "Ocurrio un error",
            err

        })
        
    }



});

router.put('/menu/:id', async(req, res) => {
    const _id = req.params.id;
    const body = req.body;
    try {
        const menuDB = await Menu.findByIdAndUpdate(
        _id, body, {new: true});
        res.json(menuDB);
    } catch (error) {
        return res.status(400).json({
            mensaje: 'Ocurrio un error', error})
        }
   });

module.exports = router;