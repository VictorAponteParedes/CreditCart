import React from "react";
import { AgregarTarjeta } from "../../components/NuevaTarjeta/nueva-tarjeta";

export const AgregarTarjetaScreen = () => {
  return (
    <AgregarTarjeta
      montoTotal="Gs. 8.500.000"
      nombre="INCOME"
      nombreTarjeta="Visa"
    />
  );
};
