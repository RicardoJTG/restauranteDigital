import mongoose from "mongoose";
const Schema=mongoose.Schema;

const usuariosSchema=new Schema({

    correo: {type:String, required:[true, "Correo Obligatorio"]},
    nombre:{type:String, required:[true, "Nombre Obligatorio"]},
    celular:{type:String, required:[true, "Celular Obligatorio"]},
    activo:{type: Boolean, default:true}



});



//Convertir a modelo

const Usuarios=mongoose.model("Usuarios",usuariosSchema);
export default Usuarios;