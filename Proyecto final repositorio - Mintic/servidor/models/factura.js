import mongoose from "mongoose";
const Schema = mongoose.Schema;

const facturaSchema = new Schema({
    nombre: {type: String, required:[true,'Nombre obligatorio']},
    descripcion: String,
    cantidad: String,
    valorUnitario: String,
    valorTotal: String,
    facturaId: String,
    fecha: {type: Date, default: Date.now},
    pagada: {type: Boolean, default: false}
});

//Convertir a modelo
const Factura = mongoose.model('Factura', facturaSchema);
export default Factura;