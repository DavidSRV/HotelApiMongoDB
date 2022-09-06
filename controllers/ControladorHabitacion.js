import { ServicioHabitacion } from "../services/ServicioHabitacion.js";

export class ControladorHabitacion {
  constructor() {}

  //buscar habitaciones
  async buscarHabitaciones(request, response) {
    // LLamo al servicio
    let servicioHabitacion = new ServicioHabitacion();

    //Intento resolver la PETICION
    try {
      response.status(200).json({
        mensaje: "Exito en la consulta",
        datos: await servicioHabitacion.buscarTodas(),
      });
    } catch (error) {
      //FALLO RESOLVIENDO LA PETICION
      response(400).json({
        mensaje: "fallo en la consulta " + error,
        datos: null,
      });
    }
  }

  //buscar habitacion por id
  async buscarHabitacionPorId(request, response) {
    let identificador = request.params.id;

    // LLamo al servicio

    let servicioHabitacion = new ServicioHabitacion();

    try {
      response.status(200).json({
        mensaje: "exito en la consulta " + identificador,
        datos: await servicioHabitacion.buscarPorId(identificador),
      });
    } catch (error) {
      //FALLO RESOLVIENDO LA PETICION
      response(400).json({
        mensaje: "fallo en la consulta " + error,
        datos: null,
      });
    }
  }

  //agregar habitacion
  async agregarHabitacion(request, response) {
    let cuerpo = request.body;

    //Llamo al servicio de habitaciones

    let servicioHabitacion = new ServicioHabitacion();

    try {
      await servicioHabitacion.agregar(cuerpo);
      response.status(200).json({
        mensaje: "exito agregando la habitacion",
        datos: null,
      });
    } catch (error) {
      //FALLO RESOLVIENDO LA PETICION
      response(400).json({
        mensaje: "fallo en la consulta " + error,
        datos: null,
      });
    }
  }

  //editar habitacion
  async editarHabitacion(request, response) {
    //recibir id como parametro
    let id = request.params.id;

    //recibir los datos con los que voy a editar (BODY)
    let datos = request.body;

    //Llamo al servicio habitaciones
    let servicioHabitacion = new ServicioHabitacion();

    try {
      await servicioHabitacion.actualizar(id, datos);
      response.status(200).json({
        mensaje: "exito editando la habitacion " + id,
        datos: null,
      });
    } catch (error) {
      //FALLO RESOLVIENDO LA PETICION
      response(400).json({});
    }
  }

  //eliminar habitacion
 async eliminarHabitacion(request, response) {
    let id = request.params.id

    let servicioHabitacion = new ServicioHabitacion();

    try {
      await servicioHabitacion.eliminar(id)
      response.status(200).json({
        mensaje: "Exito eliminando la reserva " + id,
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
