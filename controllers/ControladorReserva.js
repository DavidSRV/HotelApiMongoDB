import { ServicioReservas } from "../services/ServicioReserva.js";

export class ControladorReservas {
  constructor() {}

  reservarHabitacion(request, response) {
    let servicioReserva = new ServicioReservas();

    try {
      response.status(200).json({
        mensaje: "Exito en la reserva",
        datos: servicioReserva.buscarTodas(),
      });
    } catch (error) {
      response(400).json({
        mensaje: "fallo en la reserva " + error,
        datos: null,
      });
    }
  }

  reservarHabitacionPorId(request, response) {
    let identificador = request.params.id;

    let servicioReserva = new ServicioReservas();

    try {
      response.status(200).json({
        mensaje: "exito en la reserva " + identificador,
        datos: servicioReserva.buscarPorId(),
      });
    } catch (error) {
      response(400).json({
        mensaje: "fallo en la reserva " + error,
        datos: null,
      });
    }
  }

  agregarReserva(request, response) {
    let cuerpo = request.body;

    let servicioReserva = new ServicioReservas();

    try {
      servicioReserva.agregar(cuerpo);
      response.status(200).json({
        mensaje: "Exito reservando la habitacion",
        datos: null,
      });
    } catch (error) {
      response(400).json({
        mensaje: "fallo en la reserva " + error,
        datos: null,
      });
    }
  }

  editarReserva(request, response) {
    let id = request.params.id;

    let datos = request.body;

    let servicioReserva = new ServicioReservas();

    try {
      servicioReserva.actualizar(id, datos);
      response.status(200).json({
        mensaje: "exito editando la reserva " + id,
        datos: null,
      });
    } catch (error) {
      response(400).json({});
    }
  }

  eliminarReserva(request, response) {
    try {
      response.status(200).json({});
    } catch (error) {
      //FALLO RESOLVIENDO LA PETICION
      response(400).json({});
    }
  }




}
