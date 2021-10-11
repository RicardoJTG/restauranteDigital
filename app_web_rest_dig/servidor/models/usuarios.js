import mongoose from "mongoose";
const Schema=mongoose.Schema;

const notaSchema=new Schema({

    correo: String,
    nombre: String,
    celular: Number
    
});



//Convertir a modelo

const Usuarios=mongoose.model("Usuarios",notaSchema);
export default Usuarios;