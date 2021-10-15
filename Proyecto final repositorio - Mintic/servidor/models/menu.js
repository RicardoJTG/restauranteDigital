import mongoose from "mongoose";
const Schema=mongoose.Schema;

const menuSchema=new Schema({

    nombre: {type:String, required:[true, "Nombre Obligatorio"]},
    descripcion:String,
    codigo:String,
    activo:{type: Boolean, default:true}



});



//Convertir a modelo

const Menu=mongoose.model("Menu",menuSchema);
export default Menu;