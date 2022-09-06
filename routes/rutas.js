import express from "express";

//IMPORTAR EL CONTROLADOR DE HABITACIONES
import { ControladorHabitacion } from "../controllers/ControladorHabitacion.js";
let controladorHabitacion = new ControladorHabitacion();

import { ControladorReservas } from "../controllers/ControladorReserva.js";
let controladorReserva = new ControladorReservas();

//variable para personalizar las rutas (ENDPOINTS) de mis servicios
export let rutas = express.Router();

//escribo mis rutas (cada ruta es un servicio)

//ENDPOINTS PARA LOS SERVICIOS ASOCIADOS A LAS HABITACIONES

rutas.get(
  "/viajescomfama/v1/habitaciones",
  controladorHabitacion.buscarHabitaciones
);
rutas.get(
    "/viajescomfama/v1/habitacion/:id",
  controladorHabitacion.buscarHabitacionPorId
);
rutas.post(
  "/viajescomfama/v1/habitacion",
  controladorHabitacion.agregarHabitacion
);
rutas.put(
  "/viajescomfama/v1/habitacion/:id",
  controladorHabitacion.editarHabitacion
);

rutas.delete(
  "/viajescomfama/v1/habitacion/:id",
  controladorHabitacion.eliminarHabitacion
);

//ENDPOINTS PARA LOS SERVICIOS ASOCIADOS A LAS RESERVAS


rutas.get(
    "/viajescomfama/v1/reservas",
    controladorReserva.reservarHabitacion
  );
  rutas.get(
    "/viajescomfama/v1/reservas/:id",
    controladorReserva.reservarHabitacionPorId
  );
  rutas.post(
    "/viajescomfama/v1/reservas",
    controladorReserva.agregarReserva
  );
  rutas.put(
    "/viajescomfama/v1/reserva/:id",
    controladorReserva.editarReserva
  );

  rutas.delete(
    "/viajescomfama/v1/reserva/:id",
    controladorReserva.eliminarReserva
  )
