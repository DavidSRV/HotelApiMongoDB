import { ServicioReservas } from "../services/ServicioReserva.js";

export class ControladorReservas {
  constructor() {}

  async reservarHabitacion(request, response) {
    let servicioReserva = new ServicioReservas();

    try {
      response.status(200).json({
        mensaje: "Exito en la reserva",
        datos: await servicioReserva.buscarTodas(),
      });
    } catch (error) {
      response.status(400).json({
        mensaje: "fallo en la reserva " + error,
        datos: null,
      });
    }
  }

  async reservarHabitacionPorId(request, response) {
    let identificador = request.params.id;

    let servicioReserva = new ServicioReservas();

    try {
      response.status(200).json({
        mensaje: "exito en la reserva " + identificador,
        datos: await servicioReserva.buscarPorId(identificador),
      });
    } catch (error) {
      response.status(400).json({
        mensaje: "fallo en la reserva " + error,
        datos: null,
      });
    }
  }

  async agregarReserva(request, response) {
    let cuerpo = request.body;

    let servicioReserva = new ServicioReservas();

    try {
      await servicioReserva.agregar(cuerpo);
      response.status(200).json({
        mensaje: "Exito reservando la habitacion",
        datos: null,
      });
    } catch (error) {
      response.status(400).json({
        mensaje: "fallo en la reserva " + error,
        datos: null,
      });
    }
  }

  async editarReserva(request, response) {
    let id = request.params.id;

    let datos = request.body;

    let servicioReserva = new ServicioReservas();

    try {
      await servicioReserva.actualizar(id, datos);
      response.status(200).json({
        mensaje: "exito editando la reserva " + id,
        datos: null,
      });
    } catch (error) {
      response(400).json({});
    }
  }

  async eliminarReserva(request, response) {

    let id = request.params.id

    let servicioReserva = new ServicioReservas();

    try {
      await servicioReserva.eliminar(id)
      response.status(200).json({
        mensaje: "Exito editando la reserva " + id,
        datos: null
      });
    } catch (error) {
      //FALLO RESOLVIENDO LA PETICION
      response.status(400).json({
        mensaje: "fallo resolviendo la peticion "+ error,
        datos: null
      });
    }
  }
}
