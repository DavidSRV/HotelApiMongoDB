import { modeloReserva } from "../models/modeloDatosReserva.js";

export class ServicioReservas {
  constructor() {}

  async buscarTodas() {
    let reservas = await modeloReserva.find();
    return reservas;
  }

  async buscarPorId(id) {
    let reserva = await modeloReserva.findById(id);
    return reserva;
  }

  async agregar(datos) {
    let reservaAguardar = new modeloReserva(datos);
    return await reservaAguardar.save();
  }

  async actualizar(id, datos) {
    return await modeloReserva.findByIdAndUpdate(id, datos);
  }

  async eliminar(id){
    return await modeloReserva.findByIdAndDelete(id);
  }
}
