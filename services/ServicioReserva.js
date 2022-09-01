import { modeloReserva } from "../models/modeloDatosReserva";

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
    return modeloReserva.findByIdAndUpdate(id, datos);
  }
}