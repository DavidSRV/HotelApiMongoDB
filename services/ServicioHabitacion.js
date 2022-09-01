import { modeloHabitacion } from "../models/modeloDatosHabitacion.js";


//Nos permiten comunicar con la BD y hacer el consumo 

export class ServicioHabitacion {
  constructor() {}

  async buscarTodas() {
    let habitaciones = await modeloHabitacion.find();
    return habitaciones;
  }

  async buscarPorId(id) {
    let habitacion = await modeloHabitacion.findById(id);
    return habitacion;
  }

  async agregar(datos) {
    let habitacionAguardar = new modeloHabitacion(datos);
    return await habitacionAguardar.save();
  }

  async actualizar(id, datos) {
    return await modeloHabitacion.findByIdAndUpdate(id, datos);
  }

  async eliminar(id){
    return await modeloHabitacion.findByIdAndDelete(id);
  }
}
